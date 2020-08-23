using Taskify.Configuration;
using Taskify.Service.Client.Services;
using Taskify.ViewModels;
using Taskify.Views;
using Xamarin.Forms;

namespace Taskify
{
    public partial class App : Application
    {
        private readonly MainViewModel _mainViewModel;

        public App()
        {
            InitializeComponent();

            _mainViewModel = new MainViewModel(new DataService(ConfigurationManager.AppSettings.Url));
            MainPage = new MainPage
            {
                BindingContext = _mainViewModel
            };
        }

        protected override async void OnStart()
        {
            await _mainViewModel.Load();
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
