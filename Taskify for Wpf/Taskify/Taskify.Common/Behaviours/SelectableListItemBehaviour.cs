using System.Collections;
using System.Windows.Controls;
using System.Windows.Interactivity;

namespace WpfTaskify.Behaviours
{
    public class SelectableListItemBehaviour: Behavior<ListBox>
    {
        private ListBox listBox;
        protected override void OnAttached()
        { 
            base.OnAttached();
          this.listBox = this.AssociatedObject;
          this.AddEvents();
        }

        private void AddEvents()
        {

            this.listBox.SelectionChanged += ListBox_SelectionChanged;
        }

        private void ListBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            IList addedItems = e.AddedItems;
            foreach (var addedItem in addedItems)
            {
                ISelectableItem selectableItem =  (ISelectableItem) addedItem;
                selectableItem.IsSelected = true;
            }

            foreach (var removedItem in e.RemovedItems)
            {
                ISelectableItem selectableItem = (ISelectableItem)removedItem;
                selectableItem.IsSelected = false;
            }
        }

        protected override void OnDetaching()
        {
            base.OnDetaching();
            this.listBox.SelectionChanged -= ListBox_SelectionChanged;
        }
    }

    
}