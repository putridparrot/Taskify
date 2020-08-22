using System;
using System.Collections.Generic;
using System.Text;

namespace Taskify.ViewModels
{
    public class NavigationItemViewModel : BaseViewModel
    {
        private string _name;

        public string Name
        {
            get => _name;
            set => SetProperty(ref _name, value);
        }
    }
}
