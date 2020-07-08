using System.Collections.Generic;
using System.Threading.Tasks;
using Refit;
using Taskify.Dto;

namespace Taskify.Services
{
    public interface IDataServiceApi
    {
        [Get("/tasklist")]
        public Task<List<TaskList>> GetTaskLists();
    }
}