using System.Collections.Generic;
using System.Threading.Tasks;
using Refit;
using Taskify.Dto;

namespace Taskify.Services
{
    public class DataService : IDataService
    {
        private readonly IDataServiceApi _dataServiceApi;

        public DataService()
        {
            // TODO move URL into configuration
            _dataServiceApi = RestService.For<IDataServiceApi>("http://localhost:52606/api/");
        }

        public Task<List<TaskList>> GetTaskLists()
        {
            // TODO: handle caching etc.
            return _dataServiceApi.GetTaskLists();
        }
    }
}