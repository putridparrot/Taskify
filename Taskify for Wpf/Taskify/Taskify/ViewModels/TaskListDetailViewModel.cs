using System.Collections.Generic;
using System.Collections.ObjectModel;
using Prism.Events;
using Prism.Mvvm;
using Taskify.Data.Domain;
using Taskify.Service.Client.Services;
using WpfTaskify.Events;

namespace WpfTaskify.ViewModels
{
    public class TaskListDetailViewModel : BindableBase
    {
        private readonly IDataService dataService;
        private readonly IEventAggregator eventAggregator;
        private TaskListViewModel selectedItem;

        public TaskListDetailViewModel(IDataService dataService , IEventAggregator eventAggregator)
        {
            this.dataService = dataService;
            this.eventAggregator = eventAggregator;
            this.TaskLists = new ObservableCollection<TaskListViewModel>();
            this.Refresh();
        }

        public TaskListViewModel SelectedItem
        {
            get => this.selectedItem;
            set
            {
                this.SetProperty(ref this.selectedItem, value, nameof(SelectedItem));
                TaskListSelectedEvent taskListSelectedEvent = this.eventAggregator.GetEvent<TaskListSelectedEvent>();
                taskListSelectedEvent.Publish(this.selectedItem.Id);
            }
        }

        private async void Refresh()
        {
            List<TaskList> lists = await dataService.GetTaskLists();
            lists.ForEach(l =>
            {
                TaskListViewModel taskListViewModel = new TaskListViewModel()
                {
                    Name = l.Name,
                    Id = l.Id
                };
                this.TaskLists.Add(taskListViewModel);
            });
            
        }

        public ObservableCollection<TaskListViewModel> TaskLists { get; private set; }
    }
}