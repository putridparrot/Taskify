using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Taskify.Data.Domain;

namespace Taskify.Data.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly List<TaskList> _taskLists;
        public TaskRepository()
        {
            _taskLists = new List<TaskList>
            {
                new TaskList("My Day", new TaskListSpecification {CanDelete = false, IsUserGenerated = false}, iconName:"MyDay"),
                new TaskList("Important", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Important"),
                new TaskList("Planned", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Planned"),
                new TaskList("Assigned to you", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"AssignedToYou"),
                new TaskList("Flagged email", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Flagged"),
                new TaskList("Tasks", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Tasks"),
                
                // user added
                new TaskList("UserTasks1", new TaskListSpecification {CanDelete = true, IsUserGenerated = true}),
                new TaskList("UserTasks2", new TaskListSpecification {CanDelete = true, IsUserGenerated = true})
            };
        }

        public List<TaskList> FetchLists()
        {
            return _taskLists;
        }

        public void AddTaskList(TaskList taskList)
        {
            Debug.WriteLine("Adding List : " + taskList.Name);
            _taskLists.Add(taskList);
        }

        public void RemoveTaskList(string listName)
        {
            var list = FindList(listName);
            list.ForEach(t=>_taskLists.Remove(t));
        }

        public List<TaskList> FindList(string listName)
        {
            return _taskLists.Where(tl => String.Equals(tl.Name, listName, StringComparison.OrdinalIgnoreCase)).ToList();
        }
    }
}