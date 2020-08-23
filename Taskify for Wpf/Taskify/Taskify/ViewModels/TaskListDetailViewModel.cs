using System.Collections.ObjectModel;
using Prism.Events;
using Prism.Mvvm;
using Taskify.Events;
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
            TaskLists = new ObservableCollection<TaskListViewModel>();
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
            lists.ForEach(l =>
            {
                var taskListViewModel = new TaskListViewModel()
                {
                    Name = l.Name,
                    Id = l.Id
                };
                TaskLists.Add(taskListViewModel);
            });
            
        }

        public ObservableCollection<TaskListViewModel> TaskLists { get; private set; }
    }
}