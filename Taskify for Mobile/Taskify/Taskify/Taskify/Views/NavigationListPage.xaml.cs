using System;
using Taskify.Data.Domain;
using Taskify.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Taskify.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class NavigationListPage : ContentPage
    {
        private readonly NavigationListViewModel _viewModel;

        public NavigationListPage()
        {
            InitializeComponent();

            BindingContext = _viewModel = new NavigationListViewModel();
        }

        async void OnItemSelected(object sender, SelectedItemChangedEventArgs args)
        {
            var item = args.SelectedItem as TaskItem;
            if (item == null)
                return;

            // await Navigation.PushAsync(new ItemDetailPage(new ItemDetailViewModel(item)));

            // Manually deselect item.
            // ItemsListView.SelectedItem = null;
        }

        //async void AddItem_Clicked(object sender, EventArgs e)
        //{
        //    await Navigation.PushModalAsync(new NavigationPage(new NewItemPage()));
        //}

        protected override void OnAppearing()
        {
            base.OnAppearing();

            //if (_viewModel.Items.Count == 0)
            //    _viewModel.LoadItemsCommand.Execute(null);
        }
    }
}