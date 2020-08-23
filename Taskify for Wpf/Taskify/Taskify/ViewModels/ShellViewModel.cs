namespace Taskify.ViewModels
{
    public class ShellViewModel
    {
        public ShellViewModel(TaskListDetailViewModel taskListDetailViewModel)
        {
            TaskListDetailViewModel = taskListDetailViewModel;
        }

        public TaskListDetailViewModel TaskListDetailViewModel { get; set; }
    }
}