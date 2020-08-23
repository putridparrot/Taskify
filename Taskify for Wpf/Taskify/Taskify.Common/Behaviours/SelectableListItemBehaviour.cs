using System.Collections;
using System.Windows.Controls;
using System.Windows.Interactivity;

namespace Taskify.Behaviours
{
    public class SelectableListItemBehaviour: Behavior<ListBox>
    {
        private ListBox _listBox;
        protected override void OnAttached()
        { 
            base.OnAttached();
            _listBox = this.AssociatedObject;
            AddEvents();
        }

        private void AddEvents()
        {

            _listBox.SelectionChanged += ListBox_SelectionChanged;
        }

        private void ListBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var addedItems = e.AddedItems;
            foreach (var addedItem in addedItems)
            {
                var selectableItem =  (ISelectableItem) addedItem;
                selectableItem.IsSelected = true;
            }

            foreach (var removedItem in e.RemovedItems)
            {
                var selectableItem = (ISelectableItem)removedItem;
                selectableItem.IsSelected = false;
            }
        }

        protected override void OnDetaching()
        {
            base.OnDetaching();
            this._listBox.SelectionChanged -= ListBox_SelectionChanged;
        }
    }

    
}