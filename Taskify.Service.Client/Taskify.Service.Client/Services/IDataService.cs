using System.Collections.Generic;
using System.Threading.Tasks;
using Taskify.Service.Client.Dto;

namespace Taskify.Service.Client.Services
{
    public interface IDataService
    {
        Task<List<TaskList>> GetTaskLists();
    }
}