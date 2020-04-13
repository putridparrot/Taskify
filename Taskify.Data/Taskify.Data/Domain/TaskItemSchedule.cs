using System;

namespace Taskify.Data.Domain
{
    public class TaskItemSchedule
    {
        public DateTime? Due { get; set; }
        public DateTime? Reminder { get; set; }

    }
}