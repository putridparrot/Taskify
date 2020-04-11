using System;
using System.Collections.Generic;
using System.Text;
using Taskify.Data.Domain;

namespace Taskify.ViewModels
{
    public class ItemDetailViewModel : BaseViewModel
    {
        public Item Item { get; set; }
        public ItemDetailViewModel(Item item = null)
        {
            Title = item?.Text;
            Item = item;
        }
    }
}
