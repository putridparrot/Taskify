using System;
using System.Collections.Generic;

namespace Taskify.Data.Domain
{
    public class TaskItem
    {
        public TaskItem(string text)
        {
            Text = text;
        }

        public int Id { get; set; }
       
        public bool IsImportant { get; set; }

        public TaskNote  Note { get; set; }

        public string Text { get; set; }
        public List<TaskStep> Steps { get; set; }

        public TaskItemSchedule Schedule { get; set; }

    }
}
