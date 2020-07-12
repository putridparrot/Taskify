using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Refit;
using Taskify.Shared.Dto;

namespace Taskify.Shared.Services
{
    public interface IDataServiceApi
    {
        [Get("/tasklist")]
        public Task<List<TaskList>> GetTaskLists();
    }
}
