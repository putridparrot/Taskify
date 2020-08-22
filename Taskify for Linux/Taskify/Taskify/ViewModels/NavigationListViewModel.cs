using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace Taskify.ViewModels
{
    public class NavigationListViewModel : ViewModelBase
    {
        public ObservableCollection<NavigationItemViewModel> Items { get; } = new ObservableCollection<NavigationItemViewModel>();
    }
}
