using System.Configuration;
using System.Windows;
using Prism.Ioc;
using Prism.Unity;
using Taskify.Service.Client.Services;
using Taskify.ViewModels;

namespace Taskify
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App: PrismApplication
    {
        protected override void RegisterTypes(IContainerRegistry containerRegistry)
        {
            containerRegistry.RegisterSingleton<Shell>();
            containerRegistry.RegisterSingleton<ShellViewModel>();

            containerRegistry.RegisterInstance<IDataService>(new DataService(ConfigurationManager.AppSettings["Url"]));

            containerRegistry.Register<TaskListDetailViewModel>();
        }

        protected override Window CreateShell()
        {
            var shell = Container.Resolve<Shell>();
            shell.DataContext = Container.Resolve<ShellViewModel>();
            return shell;
        }
    }
}