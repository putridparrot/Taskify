using System;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Threading.Tasks;
using Taskify.Data.Domain;
using Taskify.Views;
using Xamarin.Forms;

namespace Taskify.ViewModels
{
    public class NavigationListViewModel : BaseViewModel
    {
        public ObservableCollection<NavigationItemViewModel> Items { get; set; }
        public Command LoadItemsCommand { get; set; }

        public NavigationListViewModel()
        {
            Title = "Taskify";
            Items = new ObservableCollection<NavigationItemViewModel>(); 
            // LoadItemsCommand = new Command(async () => await ExecuteLoadItemsCommand());

            //MessagingCenter.Subscribe<NewItemPage, NavigationItemViewModel>(this, "AddItem", async (obj, item) =>
            //{
            //    Items.Add(item);
            //    // await DataService.AddItemAsync(item);
            //});
        }

    //    private async Task ExecuteLoadItemsCommand()
    //    {
    //        if (IsBusy)
    //            return;

    //        IsBusy = true;

    //        try
    //        {
    //            Items.Clear();
    //            //var items = await DataService.GetItemsAsync(true);
    //            //foreach (var item in items)
    //            //{
    //            //    Items.Add(item);
    //            //}
    //        }
    //        catch (Exception ex)
    //        {
    //            Debug.WriteLine(ex);
    //        }
    //        finally
    //        {
    //            IsBusy = false;
    //        }
    //    }
    }
}
