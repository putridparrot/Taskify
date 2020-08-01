using System.Collections.Generic;

namespace Taskify.Service.Client.Dto
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
}