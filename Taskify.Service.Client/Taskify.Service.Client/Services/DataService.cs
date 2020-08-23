using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Refit;
using Taskify.Data.Domain;

namespace Taskify.Service.Client.Services
{
    /// <summary>
    /// Wraps the Web API in a service
    /// </summary>
    public class DataService : IDataService
    {
        private readonly IDataServiceApi _dataServiceApi;

        public DataService(string url)
        {
            _dataServiceApi = RestService.For<IDataServiceApi>(url);
        }

        public Task<List<TaskList>> GetTaskLists()
        {
            // TODO: handle caching etc.
            return _dataServiceApi.GetTaskLists();
        }
    }
}
