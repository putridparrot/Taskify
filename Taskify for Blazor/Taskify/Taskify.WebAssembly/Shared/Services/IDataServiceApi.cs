using System.Collections.Generic;
using System.Threading.Tasks;
using Refit;
using Taskify.WebAssembly.Shared.Dto;

namespace Taskify.WebAssembly.Shared.Services
{
    public interface IDataServiceApi
    {
        [Get("/tasklist")]
        public Task<List<TaskList>> GetTaskLists();
    }
}
