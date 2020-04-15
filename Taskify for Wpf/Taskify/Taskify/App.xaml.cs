using System.Windows;
using Prism;
using Prism.Ioc;
using Prism.Unity;
using Unity;
using Unity.Extension;
using Unity.Lifetime;

namespace WpfTaskify
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App: PrismApplication
    {
        protected override void RegisterTypes(IContainerRegistry containerRegistry)
        {
            containerRegistry.Register<IShell, Shell>();
            containerRegistry.Register<IShellViewModel, ShellViewModel>();
        }

        protected override Window CreateShell()
        {
            var shell = this.Container.Resolve<IShell>();
            var shellViewModel = this.Container.Resolve<IShellViewModel>();
            shell.DataContext = shellViewModel;
            return (Window) shell;
        }
    }
}