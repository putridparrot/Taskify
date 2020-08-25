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
                new TaskList(Guid.NewGuid().ToString(), "My Day", new TaskListSpecification {CanDelete = false, IsUserGenerated = false}, iconName:"MyDay"),
                new TaskList(Guid.NewGuid().ToString(),"Important", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Important"),
                new TaskList(Guid.NewGuid().ToString(),"Planned", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Planned"),
                new TaskList(Guid.NewGuid().ToString(),"Assigned to you", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"AssignedToYou"),
                new TaskList(Guid.NewGuid().ToString(),"Flagged email", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Flagged"),
                new TaskList(Guid.NewGuid().ToString(),"Tasks", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Tasks"),
                
                // user added
                new TaskList(Guid.NewGuid().ToString(),"UserTasks1", new TaskListSpecification {CanDelete = true, IsUserGenerated = true}),
                new TaskList(Guid.NewGuid().ToString(),"UserTasks2", new TaskListSpecification {CanDelete = true, IsUserGenerated = true})
            };

            PopulateDemoTasks1(_taskLists[0]);
            PopulateDemoTasks2(_taskLists[1]);
            PopulateDemoTasks3(_taskLists[6]);
        }

        private void PopulateDemoTasks1(TaskList taskList)
        {
            taskList.Tasks.AddRange(new []
            {
                new TaskItem(Guid.NewGuid().ToString(), "Write code to view tasks for selected group"),
                new TaskItem(Guid.NewGuid().ToString(), "Add a task to a group"),
                new TaskItem(Guid.NewGuid().ToString(), "Delete a user defined group")
            });
        }

        private void PopulateDemoTasks2(TaskList taskList)
        {
            taskList.Tasks.AddRange(new[]
            {
                new TaskItem(Guid.NewGuid().ToString(), "Make this work")
            });
        }

        private void PopulateDemoTasks3(TaskList taskList)
        {
            taskList.Tasks.AddRange(new[]
            {
                new TaskItem(Guid.NewGuid().ToString(), "User task 1"),
                new TaskItem(Guid.NewGuid().ToString(), "User task 2"),
                new TaskItem(Guid.NewGuid().ToString(), "User task 3")
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