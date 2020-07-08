using System.Runtime.CompilerServices;
using Microsoft.Extensions.DependencyInjection;
using Taskify.Data.Repositories;
using Taskify.Data.Services;
using Taskify.Data.SqlServer;

namespace TaskifyWebApiService
{
    public static class StartupDependencies
    {
        public static void AddDependencies(this IServiceCollection services)
        {
            services.AddScoped<ITaskService, TaskService>();
            services.AddScoped<ITaskRepository, TaskRepository>();
            //services.AddScoped<ITaskRepository, SqlTaskRepository>();
            // if using SQL uncomment
            // services.AddScoped<IDbInitializerService, SqlDbInitializerService>();
        }
    }
}