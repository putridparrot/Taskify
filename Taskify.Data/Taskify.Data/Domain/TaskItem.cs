﻿using System;
using System.Collections.Generic;

namespace Taskify.Data.Domain
{
    public class TaskItem
    {
        public TaskItem()
        {
        }

        public TaskItem(string id, string text)
        {
            Id = id;
            Text = text;
        }

        public string Id { get; set; }
        public bool IsImportant { get; set; }
        public TaskNote  Note { get; set; }
        public string Text { get; set; }
        public string Description { get; set; }
        public List<TaskStep> Steps { get; set; }
        public TaskItemSchedule Schedule { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime Created { get; set; }
        public bool IsMyDay { get; set; }
    }
}
