using System.Collections.Generic;
using System.Collections.ObjectModel;
using Prism.Events;
using Prism.Mvvm;
using Taskify.Data.Domain;
using Taskify.Data.Services;
using WpfTaskify.Events;

namespace WpfTaskify.ViewModels
{
    public class TaskListDetailViewModel : BindableBase
    {
        private readonly ITaskService taskService;
        private readonly IEventAggregator eventAggregator;
        private TaskListViewModel selectedItem;

        public TaskListDetailViewModel(ITaskService taskService , IEventAggregator eventAggregator)
        {
            this.taskService = taskService;
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

        private void Refresh()
        {
            List<TaskList> lists = this.taskService.FetchLists();
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