using System.Collections.Generic;
using Taskify.Data.Domain;

namespace Taskify.Data.Repositories
{
    public interface ITaskRepository
    {
        List<TaskList> FetchLists();
        void AddTaskList(TaskList taskList);
        void RemoveTaskList(string listName);
        List<TaskList> FindList(string listName);
    }
}