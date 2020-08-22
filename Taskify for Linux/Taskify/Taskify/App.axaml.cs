using Avalonia;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Markup.Xaml;
using Taskify.Service.Client.Services;
using Taskify.ViewModels;
using Taskify.Views;

namespace Taskify
{
    public class App : Application
    {
        public override void Initialize()
        {
            AvaloniaXamlLoader.Load(this);
        }

        public override void OnFrameworkInitializationCompleted()
        {
            if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
            {
                var mainWindowViewModel = new MainWindowViewModel(new DataService());
                desktop.MainWindow = new MainWindow
                {
                    DataContext = mainWindowViewModel
                };
                mainWindowViewModel.Load();
            }

            base.OnFrameworkInitializationCompleted();
        }
    }
}
