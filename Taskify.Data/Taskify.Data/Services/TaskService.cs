using System.Collections.Generic;
using System.Linq;
using Taskify.Data.Domain;
using Taskify.Data.Repositories;

namespace Taskify.Data.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public List<TaskList> FetchLists()
        {
            return _taskRepository.FetchLists();
        }

        public void AddTaskList(TaskList taskList)
        {
            _taskRepository.AddTaskList(taskList);
        }

        public void RemoveTaskList(string listName)
        {
            _taskRepository.RemoveTaskList(listName);
        }

        public List<TaskList> FindList(string listName)
        {
            return _taskRepository.FindList(listName);
        }

        public TaskList FindList(string taskList, bool isUserGenerated)
        {
            return FindList(taskList).SingleOrDefault(tl => tl.Specification.IsUserGenerated == isUserGenerated);
        }
    }
}