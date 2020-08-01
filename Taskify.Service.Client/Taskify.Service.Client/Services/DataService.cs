using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Refit;
using Taskify.Service.Client.Dto;

namespace Taskify.Service.Client.Services
{
    public class DataService : IDataService
    {
        private readonly IDataServiceApi _dataServiceApi;

        public DataService()
        {
            // TODO move URL into configuration
            _dataServiceApi = RestService.For<IDataServiceApi>("http://localhost:5000/api/");
        }

        public Task<List<TaskList>> GetTaskLists()
        {
            // TODO: handle caching etc.
            return _dataServiceApi.GetTaskLists();
        }
    }
}
