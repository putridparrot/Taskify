using Taskify.Data.Domain;

namespace Taskify
{
    public sealed class TaskListItem
    {
        public TaskListItem(int id, TaskList taskList)
        {
            Id = id;
            TaskList = taskList;
        }

        public int Id { get; }
        public TaskList TaskList { get; }
    }
}