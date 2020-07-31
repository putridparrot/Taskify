using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Taskify.WebAssembly.Shared.Dto
{
    public class TaskItem
    {
        public string Id { get; set; }
        public bool IsImportant { get; set; }
        public TaskNote Note { get; set; }
        public string Text { get; set; }
        public string Description { get; set; }
        public List<TaskStep> Steps { get; set; }
        public TaskItemSchedule Schedule { get; set; }
    }
    public class TaskItemSchedule
    {
        public int Id { get; set; }
        public DateTime? Due { get; set; }
        public DateTime? Reminder { get; set; }
    }

    public class TaskList
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("tasks")]
        public List<TaskItem> Tasks { get; set; }

        [JsonProperty("specification")]
        public TaskListSpecification Specification { get; set; }
        [JsonProperty("isSelected")]
        public bool IsSelected { get; set; }
        [JsonProperty("IconName")]
        public string IconName { get; set; }
    }

    public class TaskListSpecification
    {
        public bool CanDelete { get; set; }
        public bool CanRename { get; set; }
        public bool CanShare { get; set; }
        public bool CanDuplicate { get; set; }
        public bool IsImportantTaskAllowed { get; set; }
        public bool IsMyDayTaskAllowed { get; set; }

        public bool IsUserGenerated { get; set; }
    }

    public class TaskNote
    {
        public int Id { get; set; }
        public string Note { get; set; }
    }

    public class TaskStep
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public static class TaskListFactory
    {
        public static TaskList CreateTaskList(int id, string name, string uri)
        {
            return new TaskList
            {
                Id = id,
                Name = name,
            };
        }

        public static TaskList CreateTaskList(int id, string name, string uri, bool isUserGenerated)
        {
            return new TaskList
            {
                Id = id,
                Name = name,
                Specification = CreateTaskListSpecification(isUserGenerated)
            };
        }

        public static TaskListSpecification CreateTaskListSpecification(bool isUserGenerated)
        {
            return new TaskListSpecification
            {
                IsUserGenerated = isUserGenerated
            };
        }
    }
}
