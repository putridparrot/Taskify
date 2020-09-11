using MahApps.Metro.Controls;

namespace Taskify
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class Shell
    {
        public Shell()
        {
            InitializeComponent();
        }

        private void HamburgerMenu_OnItemInvoked(object sender, HamburgerMenuItemInvokedEventArgs args)
        {
            ((HamburgerMenu)sender).Content = args.InvokedItem;
        }
    }
}