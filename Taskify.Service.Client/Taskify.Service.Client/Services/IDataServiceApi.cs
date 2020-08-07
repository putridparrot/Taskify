using System.Collections.Generic;
using System.Threading.Tasks;
using Refit;
using Taskify.Data.Domain;

namespace Taskify.Service.Client.Services
{
    /// <summary>
    /// Interface maps to the Web API methods
    /// </summary>
    public interface IDataServiceApi
    {
        [Get("/api/tasklist")]
        Task<List<TaskList>> GetTaskLists();
    }
}