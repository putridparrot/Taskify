using System.Collections.Generic;

namespace Taskify.Data.Domain
{
    public class UserdefinedList : TaskList
    {
        public UserdefinedList(string name) :
            base(name)
        {
            Tasks = new List<TaskItem>();
        }

        public List<TaskItem> Tasks { get; }
    }
}
