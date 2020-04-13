using System.Collections.Generic;
using System.Linq;
using Taskify.Data.Domain;
using Taskify.Data.Repositories;

namespace Taskify.Data.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            this.taskRepository = taskRepository;
        }

        public List<TaskList> FetchLists()
        {
            return taskRepository.FetchLists();
        }

        public void AddTaskList(TaskList taskList)
        {
            taskRepository.AddTaskList(taskList);
        }

        public void RemoveTaskList(string listName)
        {
            taskRepository.RemoveTaskList(listName);
        }

        public List<TaskList> FindList(string listName)
        {
            return taskRepository.FindList(listName);
        }

        public TaskList FindList(string taskList, bool isUserGenerated)
        {
            return FindList(taskList).SingleOrDefault(tl => tl.Specification.IsUserGenerated == isUserGenerated);
        }
    }
}