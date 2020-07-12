using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Skclusive.Material.Layout;
using Taskify.WebAssembly.Shared.Services;

namespace Taskify.WebAssembly.Client
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("app");

            builder.Services.AddTransient(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });


            builder.Services.TryAddLayoutServices
            (
                new LayoutConfigBuilder()
                    .WithIsServer(false)
                    .WithIsPreRendering(false)
                    .WithResponsive(true)
                    .Build()
            );

            // builder.Services.AddSingleton<IDataService, DataService>();
            builder.Services.AddSingleton<IDataService, LocalDataService>();

            await builder.Build().RunAsync();
        }
    }
}
