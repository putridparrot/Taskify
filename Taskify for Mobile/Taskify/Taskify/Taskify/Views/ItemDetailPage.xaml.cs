using Taskify.Service.Client.Dto;
using Taskify.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Taskify.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ItemDetailPage : ContentPage
    {
        private readonly ItemDetailViewModel _viewModel;

        public ItemDetailPage(ItemDetailViewModel viewModel)
        {
            InitializeComponent();

            BindingContext = _viewModel = viewModel;
        }

        public ItemDetailPage()
        {
            InitializeComponent();

            var item = new TaskItem
            {
                Text = "Item 1",
                Description = "This is an item description."
            };

            _viewModel = new ItemDetailViewModel(item);
            BindingContext = _viewModel;
        }

    }
}