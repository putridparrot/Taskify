using Taskify.Data.Repositories;
using Taskify.Data.Services;

namespace TaskifyWebApiService;

public static class StartupDependencies
{
    public static void AddDependencies(this IServiceCollection services)
    {
        services.AddScoped<ITaskService, TaskService>();
        services.AddScoped<ITaskRepository, TaskRepository>();
    }
}