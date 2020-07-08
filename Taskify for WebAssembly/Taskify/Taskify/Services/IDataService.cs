using System.Collections.Generic;
using System.Threading.Tasks;
using Taskify.Dto;

namespace Taskify.Services
{
    public interface IDataService
    {
        Task<List<TaskList>> GetTaskLists();
    }
}