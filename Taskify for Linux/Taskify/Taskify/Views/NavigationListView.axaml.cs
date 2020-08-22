using Avalonia;
using Avalonia.Controls;
using Avalonia.Markup.Xaml;

namespace Taskify.Views
{
    public class NavigationListView : UserControl
    {
        public NavigationListView()
        {
            this.InitializeComponent();
        }

        private void InitializeComponent()
        {
            AvaloniaXamlLoader.Load(this);
        }
    }
}
