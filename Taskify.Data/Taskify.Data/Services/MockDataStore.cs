﻿/*
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Taskify.Data.Domain;

namespace Taskify.Data.Services
{
    public class MockDataStore : IDataStore<Item>
    {
        readonly List<Item> items;

        public MockDataStore()
        {
            items = new List<Item>()
            {
                new Item { Id = Guid.NewGuid().ToString(), Text = "Today", Description="Today's tasks" },
                new Item { Id = Guid.NewGuid().ToString(), Text = "Important", Description="Important tasks" },
                new Item { Id = Guid.NewGuid().ToString(), Text = "Planned", Description="Planned tasks" },
                new Item { Id = Guid.NewGuid().ToString(), Text = "Assigned to you", Description="Tasks assigned to you" },
                new Item { Id = Guid.NewGuid().ToString(), Text = "Tasks", Description="List of all tasks" },
            };
        }

        public async Task<bool> AddItemAsync(Item item)
        {
            items.Add(item);

            return await Task.FromResult(true);
        }

        public async Task<bool> UpdateItemAsync(Item item)
        {
            var oldItem = items.Where((Item arg) => arg.Id == item.Id).FirstOrDefault();
            items.Remove(oldItem);
            items.Add(item);

            return await Task.FromResult(true);
        }

        public async Task<bool> DeleteItemAsync(string id)
        {
            var oldItem = items.Where((Item arg) => arg.Id == id).FirstOrDefault();
            items.Remove(oldItem);

            return await Task.FromResult(true);
        }

        public async Task<Item> GetItemAsync(string id)
        {
            return await Task.FromResult(items.FirstOrDefault(s => s.Id == id));
        }

        public async Task<IEnumerable<Item>> GetItemsAsync(bool forceRefresh = false)
        {
            return await Task.FromResult(items);
        }
    }

}
*/
