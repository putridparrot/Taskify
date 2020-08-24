using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Taskify.Data.Domain;
using Taskify.Data.Services;

namespace TaskifyWebApiService.Controllers
{
    [ApiController]
    [Route("/api/tasklist")]
    public class TaskServiceController : ControllerBase
    {
        private readonly ITaskService _taskService;
        private readonly ILogger<TaskServiceController> _logger;

        
        public TaskServiceController(ITaskService taskService, ILogger<TaskServiceController> logger)
        {
            _taskService = taskService;
            _logger = logger;
        }
        
        [HttpGet] 
        public IEnumerable<TaskList> Lists()
        {
            return _taskService.FetchLists();
        }
    }
}
