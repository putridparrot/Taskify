using System;

namespace Taskify.Data.Domain
{
    public class TaskItem
    {
        public string Id { get; set; }
        public DateTime Due { get; set; }
        public bool Important { get; set; }
        public string Text { get; set; }
    }
}
