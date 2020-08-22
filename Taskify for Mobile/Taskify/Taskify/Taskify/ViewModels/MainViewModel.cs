using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Taskify.Service.Client.Services;

namespace Taskify.ViewModels
{
    public class MainViewModel : BaseViewModel
    {
        private readonly IDataService _dataService;
        private readonly NavigationListViewModel _navigationList;

        public MainViewModel(IDataService dataService)
        {
            _dataService = dataService;
            _navigationList = new NavigationListViewModel();
        }

        public async Task Load()
        {
            _navigationList.Items.Clear();

            try
            {
                var taskList = await _dataService.GetTaskLists();
                foreach (var navigationItem in taskList.Select(t => new NavigationItemViewModel {Name = t.Name}))
                {
                    _navigationList.Items.Add(navigationItem);
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }
        }

        public NavigationListViewModel NavigationList => _navigationList;
    }
}
