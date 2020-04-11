using System.Collections.Generic;
using System.Linq;

namespace Taskify.Data.Domain
{
    public static class StateExtensions
    {
        public static TaskList GetTaskList(this State state, string name)
        {
            return state.TaskLists.FirstOrDefault(c => c.Name == name);
        }

        public static List<TaskItem> ByName(this State state, string name)
        {
            var taskList = state.GetTaskList(name);
            if (taskList == null)
            {
                return new List<TaskItem>(0);
            }

            if (taskList is SmartList smartList)
            {
                var fromTaskLists = state.TaskLists.OfType<UserdefinedList>().SelectMany(tl => tl.Tasks).ToList().FindAll(smartList.Filter);
                var fromTasks = state.Tasks.FindAll(smartList.Filter);
                return fromTasks.Concat(fromTaskLists).ToList();
            }
            return state.TaskLists.OfType<UserdefinedList>().Where(tl => tl.Name == name).SelectMany(tl => tl.Tasks).ToList();
        }

        public static void RemoveByName(this State state, string name)
        {
            // we cannot remove smart lists (in the current implementation
            foreach (var tl in state.TaskLists.OfType<UserdefinedList>().Where(tl => tl.Name == name).ToList())
            {
                state.TaskLists.Remove(tl);
            }
        }
    }

}
