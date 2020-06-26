using System.Runtime.CompilerServices;
using System.Windows;
using Prism.Mvvm;
using WpfTaskify.Behaviours;

namespace WpfTaskify.ViewModels
{
    public class TaskListViewModel: BindableBase, ISelectableItem
    {
        public string Name { get; set; }

        private bool isSelected;
        public bool IsSelected
        {
            get => this.isSelected;
            set => this.SetProperty(ref this.isSelected, value, "IsSelected");
        }
    }
}