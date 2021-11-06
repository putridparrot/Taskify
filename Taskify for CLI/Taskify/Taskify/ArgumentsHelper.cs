using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Alba.CsConsoleFormat;
using Taskify.Data.Domain;
using Taskify.Service.Client.Services;

namespace Taskify
{
    public static class ArgumentsHelper
    {
        private static readonly LineThickness StrokeHeader = new LineThickness(LineWidth.None, LineWidth.Double);
        private static readonly LineThickness StrokeRight = new LineThickness(LineWidth.None, LineWidth.None, LineWidth.Single, LineWidth.None);

        public static async Task RenderTaskGroups(IAsyncEnumerable<TaskListItem> e)
        {
            var document = new Document
            {
                Children =
                {
                    new Grid
                    {
                        Stroke = StrokeHeader,
                        StrokeColor = ConsoleColor.DarkGray,
                        Background = Console.BackgroundColor,
                        Columns =
                        {
                            new Column
                            {
                                Width = GridLength.Auto,
                                MinWidth = 10
                            },
                            new Column
                            {
                                Width = GridLength.Auto
                            }
                        },
                        Children =
                        {
                            new Cell("Id")
                            {
                                Stroke = StrokeHeader, Color = ConsoleColor.White
                            },
                            new Cell("Name")
                            {
                                Stroke = StrokeHeader, Color = ConsoleColor.White
                            }
                        }
                    }
                }
            };

            await foreach (var taskListItem in e)
            {
                document.Children[0].Children.Add(new Cell(taskListItem.Id) { Color = ConsoleColor.Green });
                document.Children[0].Children.Add(new Cell(taskListItem.TaskList.Name));
            }

            ConsoleRenderer.RenderDocument(document);
        }


        public static async Task RenderTaskItems(IAsyncEnumerable<Tuple<int, int, TaskItem>> e)
        {
            var document = new Document
            {
                Children =
                {
                    new Grid
                    {
                        Stroke = StrokeHeader,
                        StrokeColor = ConsoleColor.DarkGray,
                        Background = Console.BackgroundColor,
                        Columns =
                        {
                            new Column
                            {
                                Width = GridLength.Auto,
                                MinWidth = 10
                            },
                            new Column
                            {
                                Width = GridLength.Auto,
                                MinWidth = 10
                            },
                            new Column
                            {
                                Width = GridLength.Auto,
                                MinWidth = 10
                            },
                            new Column
                            {
                                Width = GridLength.Star(1),
                                MinWidth = 10
                            }
                        },
                        Children =
                        {
                            new Cell("Id")
                            {
                                Stroke = StrokeHeader, Color = ConsoleColor.White
                            },
                            new Cell("Created")
                            {
                                Stroke = StrokeHeader, Color = ConsoleColor.White
                            },
                            new Cell("Name")
                            {
                                Stroke = StrokeHeader, Color = ConsoleColor.White
                            },
                            new Cell("Description")
                            {
                                Stroke = StrokeHeader, Color = ConsoleColor.White
                            }
                        }
                    }
                }
            };

            await foreach (var tuple in e)
            {
                document.Children[0].Children.Add(new Cell($"{tuple.Item1}.{tuple.Item2}") { Color = ConsoleColor.Green });
                document.Children[0].Children.Add(new Cell(tuple.Item3.Created));
                document.Children[0].Children.Add(new Cell(tuple.Item3.Text));
                document.Children[0].Children.Add(new Cell(tuple.Item3.Description));
            }

            ConsoleRenderer.RenderDocument(document);
        }

        public static async IAsyncEnumerable<TaskListItem> IterateTaskGroups(this IDataService dataService, int idx = 0)
        {
            var taskGroups = await dataService.GetTaskLists();

            var base0Index = idx - 1;

            if (base0Index < 0)
            {
                var i = 1;
                foreach (var taskList in taskGroups)
                {
                    yield return new TaskListItem(i, taskList);
                    i++;
                }
            }
            else
            {
                if (base0Index < taskGroups.Count)
                {
                    yield return new TaskListItem(idx, taskGroups[base0Index]);
                }
            }
        }

        public static async IAsyncEnumerable<Tuple<int, int, TaskItem>> IterateTaskLists(this IDataService dataService, int taskGroupIndex = 0, int taskIndex = 0, Func<TaskItem, bool> predicate = null)
        {
            await foreach(var taskGroup in IterateTaskGroups(dataService, taskGroupIndex))
            {
                var j = 1;
                var tasks = predicate != null ? taskGroup.TaskList.Tasks.Where(predicate).ToList() : taskGroup.TaskList.Tasks;

                var base0Index = taskIndex - 1;

                if (base0Index < 0 || predicate != null)
                {
                    foreach (var task in tasks)
                    {
                        yield return new Tuple<int, int, TaskItem>(taskGroup.Id, j, task);
                        j++;
                    }
                }
                else
                {
                    if (base0Index < tasks.Count)
                    {
                        yield return new Tuple<int, int, TaskItem>(taskGroup.Id, taskIndex, tasks[base0Index]);
                    }
                }
            }
        }
    }
}
