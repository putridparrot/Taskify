using Prism.Mvvm;
using Taskify.Behaviours;

namespace Taskify.ViewModels
{
    public class TaskListViewModel : BindableBase, ISelectableItem
    {
        private bool _isSelected;

        public string Name { get; set; }
        public string Id { get; set; }

        public bool IsSelected
        {
            get => _isSelected;
            set => SetProperty(ref _isSelected, value);
        }

        public bool IsUserGenerated { get; set; }
        public string IconName { get; set; }
        public string BackgroundColour { get; set; }

    }
}