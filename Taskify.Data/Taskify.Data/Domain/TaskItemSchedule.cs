using System;

namespace Taskify.Data.Domain
{
    public class TaskItemSchedule
    {
        public int Id { get; set; }
        public DateTime? Due { get; set; }
        public DateTime? Reminder { get; set; }
    }
}