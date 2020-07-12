using System.Collections.Generic;
using System.Threading.Tasks;
using Taskify.WebAssembly.Shared.Dto;

namespace Taskify.WebAssembly.Shared.Services
{
    /*
     * Implementation of IDataService for local storage
     */
    public class LocalDataService : IDataService
    {
        private readonly List<TaskList> _taskLists;

        public LocalDataService()
        {
            _taskLists = new List<TaskList>
            {
                TaskListFactory.CreateTaskList(0, "My Day", "/"),
                TaskListFactory.CreateTaskList(1, "Important", "/important"),
                TaskListFactory.CreateTaskList(2, "Planned", "/planned"),
                TaskListFactory.CreateTaskList(3, "Assigned to you", "/assignedtoyou"),
                TaskListFactory.CreateTaskList(4, "Tasks", "/tasks")
            };

            // append some sample user defined
            _taskLists.AddRange(new TaskList[]
            {
                TaskListFactory.CreateTaskList(5, "User1", "/tasks", true),
                TaskListFactory.CreateTaskList(6, "User2", "/tasks", true)
            });
        }

        public Task<List<TaskList>> GetTaskLists()
        {
            return Task.FromResult(_taskLists);
        }
    }

}
