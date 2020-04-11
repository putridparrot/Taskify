using System;
using Taskify.Data.Services;
using Taskify.Views;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Taskify
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            DependencyService.Register<MockDataStore>();
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
