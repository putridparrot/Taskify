using System.Collections.Generic;
using System.Collections.ObjectModel;
using Taskify.Data.Domain;
using Taskify.Data.Services;

namespace WpfTaskify.ViewModels
{
    public class TaskListDetailViewModel
    {
        private readonly ITaskService taskService;

        public TaskListDetailViewModel(ITaskService taskService)
        {
            this.taskService = taskService;
            this.TaskLists = new ObservableCollection<TaskListViewModel>();
            this.Refresh();
        }

        private void Refresh()
        {
            List<TaskList> lists = this.taskService.FetchLists();
            lists.ForEach(l =>
            {
                TaskListViewModel taskListViewModel = new TaskListViewModel();
                taskListViewModel.Name = l.Name;
                this.TaskLists.Add(taskListViewModel);
            });
            
        }

        public ObservableCollection<TaskListViewModel> TaskLists { get; private set; }
    }
}