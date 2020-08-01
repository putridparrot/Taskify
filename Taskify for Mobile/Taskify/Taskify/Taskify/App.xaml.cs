using Taskify.Service.Client.Services;
using Taskify.Views;
using Xamarin.Forms;

namespace Taskify
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            DependencyService.Register<DataService>();
            MainPage = new MainPage();
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
