using Microsoft.AspNetCore.Mvc;
using Taskify.Data.Domain;
using Taskify.Data.Services;

namespace TaskifyWebApiService.Controllers;

[ApiController]
[Route("/api/tasklist")]
public class TaskServiceController : Controller
{
    private readonly ITaskService _taskService;
    private readonly ILogger<TaskServiceController> _logger;

    public TaskServiceController(ITaskService taskService, ILogger<TaskServiceController> logger)
    {
        _taskService = taskService;
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<TaskList> Lists() =>
        _taskService.FetchLists();
}