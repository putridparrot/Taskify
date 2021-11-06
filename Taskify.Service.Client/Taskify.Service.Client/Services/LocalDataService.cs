using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Taskify.Data.Domain;

namespace Taskify.Service.Client.Services
{
    //
    // Implementation of IDataService for local storage
    //
    public class LocalDataService : IDataService
    {
        private readonly List<TaskList> _taskLists;

        public LocalDataService()
        {
            _taskLists = new List<TaskList>
            {
                new TaskList(Guid.NewGuid().ToString(), "My Day", new TaskListSpecification {CanDelete = false, IsUserGenerated = false}, iconName:"MyDay"),
                new TaskList(Guid.NewGuid().ToString(), "Important", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Important"),
                new TaskList(Guid.NewGuid().ToString(), "Planned", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Planned"),
                new TaskList(Guid.NewGuid().ToString(), "Assigned to you", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"AssignedToYou"),
                new TaskList(Guid.NewGuid().ToString(), "Flagged email", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Flagged"),
                new TaskList(Guid.NewGuid().ToString(), "Tasks", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Tasks"),
            };
        }

        public Task<List<TaskList>> GetTaskLists()
        {
            return Task.FromResult(_taskLists);
        }
    }
}