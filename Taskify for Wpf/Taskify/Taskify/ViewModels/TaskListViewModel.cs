using Prism.Mvvm;
using Taskify.Behaviours;

namespace Taskify.ViewModels
{
    public class TaskListViewModel: BindableBase, ISelectableItem
    {
        public string Name { get; set; }
        public int Id { get; set; }

        private bool isSelected;
        public bool IsSelected
        {
            get => this.isSelected;
            set => this.SetProperty(ref this.isSelected, value, "IsSelected");
        }
    }
}