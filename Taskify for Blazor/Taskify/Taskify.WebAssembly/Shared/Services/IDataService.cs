using System.Collections.Generic;
using System.Threading.Tasks;
using Taskify.WebAssembly.Shared.Dto;

namespace Taskify.WebAssembly.Shared.Services
{
    public interface IDataService
    {
        Task<List<TaskList>> GetTaskLists();
    }
}
