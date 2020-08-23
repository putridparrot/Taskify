using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Skclusive.Material.Layout;
using Taskify.Service.Client.Services;

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

            builder.Services.AddSingleton<IDataService, DataService>(sp =>
            {
                var configuration = sp.GetRequiredService<IConfiguration>();
                return new DataService(configuration["Url"]);
            });

            await builder.Build().RunAsync();
        }
    }
}
