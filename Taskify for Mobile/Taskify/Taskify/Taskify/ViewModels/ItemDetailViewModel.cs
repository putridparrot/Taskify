using System;
using System.Collections.Generic;
using System.Text;
using Taskify.Data.Domain;

namespace Taskify.ViewModels
{
    public class ItemDetailViewModel : BaseViewModel
    {
        public TaskItem Item { get; set; }
        public ItemDetailViewModel(TaskItem item = null)
        {
            Title = item?.Text;
            Item = item;
        }
    }
}
