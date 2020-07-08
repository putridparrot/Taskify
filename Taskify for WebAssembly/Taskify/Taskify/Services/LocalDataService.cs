using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Taskify.Dto;

namespace Taskify.Services
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
                new TaskList
                {
                    Id = 0,
                    Name = "My Day"
                },
                new TaskList
                {
                    Id = 1,
                    Name = "Important"
                },
                new TaskList
                {
                    Id = 2,
                    Name = "User 1",
                    Specification = new TaskListSpecification
                    {
                        IsUserGenerated = true
                    }
                }
            };
        }

        public Task<List<TaskList>> GetTaskLists()
        {
            return Task.FromResult(_taskLists);
        }
    }
}
