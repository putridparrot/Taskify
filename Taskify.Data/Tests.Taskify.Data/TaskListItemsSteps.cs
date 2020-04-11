using NUnit.Framework;
using System;
using System.Collections.Generic;
using TechTalk.SpecFlow;
using Taskify.Data.Domain;


namespace Tests.Taskify.Data
{
    [Binding]
    public class TaskListItemsSteps
    {
        private readonly TaskListContext _context;
        private List<TaskItem> _results;

        public TaskListItemsSteps(TaskListContext context)
        {
            _context = context;
        }

        [Given(@"I have (.*) for (.*)")]
        public void GivenIHaveFor(int tasks, string taskList)
        {
            GenerateTasks(_context, tasks, taskList);
        }

        [When(@"I request (.*)'s tasks")]
        public void WhenIRequestSTasks(string taskList)
        {
            _results = _context.State.ByName(taskList);
        }

        [Then(@"the resultant list should have (.*) items")]
        public void ThenTheResultantListShouldHaveItems(int expected)
        {
            Assert.AreEqual(expected, _results.Count);
        }

        [Given(@"I have a known state of tasks")]
        public void GivenIHaveAKnownStateOfTasks()
        {
            // user defined some today most not
            _context.State.TaskLists.Add(new UserdefinedList("New List")
            {
                Tasks =
                {
                    new TaskItem
                    {
                        Due = DateTime.Now.AddDays(1)
                    },
                    new TaskItem
                    {
                        Due = DateTime.Now.AddDays(1)
                    },
                    new TaskItem
                    {
                        Due = DateTime.Now.AddDays(1)
                    },
                    new TaskItem
                    {
                        Due = DateTime.Now
                    },
                }
            });

            // My Day
            _context.State.Tasks.Add(new TaskItem
            {
                Due = DateTime.Now
            });
            // Important && Planned
            _context.State.Tasks.Add(new TaskItem
            {
                Important = true,
                Due = DateTime.Now.AddDays(1)
            });
            _context.State.Tasks.Add(new TaskItem
            {
                Important = true,
                Due = DateTime.Now.AddDays(2)
            });
            _context.State.Tasks.Add(new TaskItem
            {
                Important = true,
                Due = DateTime.Now.AddDays(3)
            });
            // Planned but not important
            _context.State.Tasks.Add(new TaskItem
            {
                Due = DateTime.Now.AddDays(4)
            });
        }

        private static void GenerateTasks(TaskListContext context, int numTasks, string taskListName)
        {
            var taskList = context.State.GetTaskList(taskListName);
            if (taskList is SmartList)
            {
                // add tasks that will be filtered by the smart list
                for (var i = 0; i < numTasks; i++)
                {
                    var task = new TaskItem();
                    context.State.Tasks.Add(task);

                    switch (taskListName)
                    {
                        case "My Day":
                            task.Due = DateTime.Now;
                            break;
                        case "Important":
                            task.Important = true;
                            break;
                        case "Planned":
                            task.Due = DateTime.Now.AddDays(3);
                            break;
                    }
                }
            }
            else
            {
                UserdefinedList list;
                if (taskList != null)
                {
                    list = taskList as UserdefinedList;
                }
                else
                {
                    list = new UserdefinedList(taskListName);
                    context.State.TaskLists.Add(list);
                }

                if (list != null)
                {
                    // generate required tasks for this list
                    for (var i = 0; i < numTasks; i++)
                    {
                        list.Tasks.Add(new TaskItem { });
                    }
                }
            }
        }
    }
}
