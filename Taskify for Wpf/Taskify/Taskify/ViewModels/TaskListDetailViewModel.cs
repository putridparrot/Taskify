using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using Prism.Events;
using Prism.Mvvm;
using Taskify.Events;
using Taskify.Presentation;
using Taskify.Service.Client.Services;

namespace Taskify.ViewModels
{
    public class TaskListDetailViewModel : BindableBase
    {
        private readonly IDataService _dataService;
        private readonly IEventAggregator _eventAggregator;
        private TaskListViewModel _selectedItem;

        public TaskListDetailViewModel(IDataService dataService , IEventAggregator eventAggregator)
        {
            _dataService = dataService;
            _eventAggregator = eventAggregator;
            TaskLists = new ExtendedObservableCollection<TaskListViewModel>();
            Refresh();
        }

        public TaskListViewModel SelectedItem
        {
            get => _selectedItem;
            set
            {
                if (SetProperty(ref this._selectedItem, value, nameof(SelectedItem)))
                {
                    var taskListSelectedEvent =
                        _eventAggregator.GetEvent<TaskListSelectedEvent>();
                    taskListSelectedEvent.Publish(this._selectedItem.Id);
                }
            }
        }

        private async void Refresh()
        {
            var lists = await _dataService.GetTaskLists();
            TaskLists.AddRange(lists.Select(l => new TaskListViewModel
            {
                Name = l.Name,
                Id = l.Id,
                BackgroundColour = l.BackgroundColour,
                IconName = l.IconName,
                IsUserGenerated = l.Specification?.IsUserGenerated ?? false
            }));
            RaisePropertyChanged(nameof(TaskLists));
        }

        public ExtendedObservableCollection<TaskListViewModel> TaskLists { get; private set; }
    }
}