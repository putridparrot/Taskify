﻿using Taskify.Service.Client.Dto;

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
