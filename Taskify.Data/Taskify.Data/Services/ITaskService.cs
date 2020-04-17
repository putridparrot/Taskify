using System.Collections.Generic;
using Taskify.Data.Domain;

namespace Taskify.Data.Services
{
    public interface ITaskService
    {
        List<TaskList> FetchLists();
        void AddTaskList(TaskList taskList);
        void RemoveTaskList(string listName);
        List<TaskList> FindList(string listName);
        TaskList FindList(string taskList, bool isUserGenerated);
    }
}