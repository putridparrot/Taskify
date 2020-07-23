using Prism.Mvvm;

namespace WpfTaskify.ViewModels
{
    public class TaskViewModel : BindableBase
    {
        public  string Name { get; set; }
        public int Id { get; set; }

    }
}