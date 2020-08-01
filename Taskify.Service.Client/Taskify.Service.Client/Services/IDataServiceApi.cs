using System.Collections.Generic;
using System.Threading.Tasks;
using Refit;
using Taskify.Service.Client.Dto;

namespace Taskify.Service.Client.Services
{
    public interface IDataServiceApi
    {
        [Get("/tasklist")]
        Task<List<TaskList>> GetTaskLists();
    }
}