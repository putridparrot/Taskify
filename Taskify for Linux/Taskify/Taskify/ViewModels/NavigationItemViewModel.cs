using ReactiveUI;

namespace Taskify.ViewModels
{
    public class NavigationItemViewModel : ViewModelBase
    {
        private string _name;

        public string Name
        {
            get => _name;
            set => this.RaiseAndSetIfChanged(ref _name, value);
        }
    }
}