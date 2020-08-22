using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DynamicData;
using Taskify.Service.Client.Services;

namespace Taskify.ViewModels
{
    public class MainWindowViewModel : ViewModelBase
    {
        private readonly IDataService _dataService;
        private readonly NavigationListViewModel _navigationList;

        public MainWindowViewModel(IDataService dataService)
        {
            _dataService = dataService;
            _navigationList = new NavigationListViewModel();
        }

        public async Task Load()
        {
            _navigationList.Items.Clear();

            var taskList = await _dataService.GetTaskLists();
            _navigationList.Items.AddRange(taskList.Select(t => new NavigationItemViewModel { Name = t.Name }));
        }

        public NavigationListViewModel NavigationList => _navigationList;
    }
}
