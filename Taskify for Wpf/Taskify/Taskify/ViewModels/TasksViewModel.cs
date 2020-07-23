using System.Collections.ObjectModel;
using Prism.Mvvm;

namespace WpfTaskify.ViewModels
{
    public class TasksViewModel : BindableBase
    {

        private ObservableCollection<TaskViewModel> taskViewModels;

        public ObservableCollection<TaskViewModel> Tasks
        {
            get => taskViewModels;
            set => taskViewModels = value;
        }
    }
}