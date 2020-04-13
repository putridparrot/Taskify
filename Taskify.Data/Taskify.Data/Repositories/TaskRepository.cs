using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Taskify.Data.Domain;

namespace Taskify.Data.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private List<TaskList> taskLists;
        public TaskRepository()
        {
            this.taskLists = new List<TaskList>()
            {
                new TaskList("My Day", new TaskListSpecification() {CanDelete = false, IsUserGenerated = false}), 
                new TaskList("Important", new TaskListSpecification() {CanDelete = false, IsUserGenerated = false}), 
                new TaskList("Planned", new TaskListSpecification() {CanDelete = false, IsUserGenerated = false}),
                new TaskList("Tasks", new TaskListSpecification() {CanDelete = false, IsUserGenerated = false})
            };
        }

        public List<TaskList> FetchLists()
        {
            return this.taskLists;
        }

        public void AddTaskList(TaskList taskList)
        {
            Debug.WriteLine("Adding List : " + taskList.Name);
            this.taskLists.Add(taskList);
        }

        public void RemoveTaskList(string listName)
        {
            var list = FindList(listName);
            list.ForEach(t=>taskLists.Remove(t));
        }

        public List<TaskList> FindList(string listName)
        {
            return taskLists.Where(tl => String.Equals(tl.Name, listName, StringComparison.OrdinalIgnoreCase)).ToList();
        }
    }
}