using System;
using System.Collections.Generic;

namespace Taskify.Data.Domain
{
    /*
     * Acts as the application state
     */
    public class State
    {
        public State()
        {
            TaskLists = new List<TaskList>
            {
                new SmartList("My Day", tsk => tsk.Due.Date <= DateTime.Now.Date),
                new SmartList("Important", tsk => tsk.Important),
                new SmartList("Planned", tsk => tsk.Due > DateTime.Now),
                //new SmartList("Assigned to", tsk => tsk.Due > DateTime.Now),
                new SmartList("Tasks", tsk => true)
            };
            Tasks = new List<TaskItem>();
        }

        public List<TaskList> TaskLists { get; }
        public List<TaskItem> Tasks { get; }
    }
}
