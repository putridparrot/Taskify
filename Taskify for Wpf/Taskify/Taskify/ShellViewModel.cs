using WpfTaskify.ViewModels;

namespace WpfTaskify
{
    public class ShellViewModel : IShellViewModel
    {
        public ShellViewModel(TaskListDetailViewModel taskListDetailViewModel)
        {
            this.TaskListDetailViewModel = taskListDetailViewModel;
        }

        public TaskListDetailViewModel TaskListDetailViewModel { get; set; }
    }
}