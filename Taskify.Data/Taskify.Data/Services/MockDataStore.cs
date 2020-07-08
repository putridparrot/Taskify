//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Taskify.Data.Domain;

//namespace Taskify.Data.Services
//{
//    public class MockDataStore : IDataStore<TaskItem>
//    {
//        readonly List<TaskItem> _items;

//        public MockDataStore()
//        {
//            _items = new List<TaskItem>()
//            {
//                new TaskItem { Id = Guid.NewGuid().ToString(), Text = "Today", Description="Today's tasks" },
//                new TaskItem { Id = Guid.NewGuid().ToString(), Text = "Important", Description="Important tasks" },
//                new TaskItem { Id = Guid.NewGuid().ToString(), Text = "Planned", Description="Planned tasks" },
//                new TaskItem { Id = Guid.NewGuid().ToString(), Text = "Assigned to you", Description="Tasks assigned to you" },
//                new TaskItem { Id = Guid.NewGuid().ToString(), Text = "Tasks", Description="List of all tasks" },
//            };
//        }

//        public Task<bool> AddItemAsync(TaskItem item)
//        {
//            _items.Add(item);
//            return Task.FromResult(true);
//        }

//        public Task<bool> UpdateItemAsync(TaskItem item)
//        {
//            var oldItem = _items.FirstOrDefault(arg => arg.Id == item.Id);
//            _items.Remove(oldItem);
//            _items.Add(item);
//            return Task.FromResult(true);
//        }

//        public Task<bool> DeleteItemAsync(string id)
//        {
//            var oldItem = _items.FirstOrDefault(arg => arg.Id == id);
//            _items.Remove(oldItem);
//            return Task.FromResult(true);
//        }

//        public Task<TaskItem> GetItemAsync(string id)
//        {
//            return Task.FromResult(_items.FirstOrDefault(s => s.Id == id));
//        }

//        public Task<IEnumerable<TaskItem>> GetItemsAsync(bool forceRefresh = false)
//        {
//            return Task.FromResult(_items as IEnumerable<TaskItem>);
//        }
//    }
//}
