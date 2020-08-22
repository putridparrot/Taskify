using Avalonia;
using Avalonia.Controls;
using Avalonia.Markup.Xaml;

namespace Taskify.Views
{
    public class TaskListView : UserControl
    {
        public TaskListView()
        {
            this.InitializeComponent();
        }

        private void InitializeComponent()
        {
            AvaloniaXamlLoader.Load(this);
        }
    }
}
