using System.Collections.ObjectModel;
using Prism.Mvvm;

namespace Taskify.ViewModels
{
    public class TasksViewModel : BindableBase
    {
        private ObservableCollection<TaskViewModel> _tasks;

        public ObservableCollection<TaskViewModel> Tasks
        {
            get => _tasks;
            set => _tasks = value;
        }
    }
}