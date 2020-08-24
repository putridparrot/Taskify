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
                new TaskList(0, "My Day", new TaskListSpecification {CanDelete = false, IsUserGenerated = false}, iconName:"MyDay"),
                new TaskList(1,"Important", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Important"),
                new TaskList(2,"Planned", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Planned"),
                new TaskList(3,"Assigned to you", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"AssignedToYou"),
                new TaskList(4,"Flagged email", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Flagged"),
                new TaskList(5,"Tasks", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Tasks"),
                
                // user added
                new TaskList(6,"UserTasks1", new TaskListSpecification {CanDelete = true, IsUserGenerated = true}),
                new TaskList(7,"UserTasks2", new TaskListSpecification {CanDelete = true, IsUserGenerated = true})
            };

            PopulateDemoTasks(_taskLists[0]);
        }

        private void PopulateDemoTasks(TaskList taskList)
        {
            taskList.Tasks.AddRange(new []
            {
                new TaskItem(0, "Write code to view tasks for selected group"),
                new TaskItem(1, "Add a task to a group"),
                new TaskItem(2, "Delete a user defined group")
            });
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