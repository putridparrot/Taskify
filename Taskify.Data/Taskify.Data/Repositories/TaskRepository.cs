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
                new TaskList(Guid.NewGuid().ToString(), "My Day", new TaskListSpecification {CanDelete = false, IsUserGenerated = false}, iconName:"MyDay", "d7ccc8"),
                new TaskList(Guid.NewGuid().ToString(),"Important", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Important", "fce4ec"),
                new TaskList(Guid.NewGuid().ToString(),"Planned", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Planned", "e0f2f1"),
                // this requires sharing with others, so disabling for now
                // new TaskList(Guid.NewGuid().ToString(),"Assigned to you", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"AssignedToYou", "e8f5e9"),
                new TaskList(Guid.NewGuid().ToString(),"Tasks", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Tasks", "9fa8da"),
                
                // user added
                new TaskList(Guid.NewGuid().ToString(),"UserTasks1", new TaskListSpecification {CanDelete = true, IsUserGenerated = true}),
                new TaskList(Guid.NewGuid().ToString(),"UserTasks2", new TaskListSpecification {CanDelete = true, IsUserGenerated = true})
            };

            PopulateDemoTasks();
        }

        private void PopulateDemoTasks()
        {
            // all non-user defined tasks
            _taskLists[3].Tasks.AddRange(new[]
            {
                new TaskItem(Guid.NewGuid().ToString(), "Write code to view tasks for selected group"),
                new TaskItem(Guid.NewGuid().ToString(), "Add a task to a group"),
                new TaskItem(Guid.NewGuid().ToString(), "Delete a user defined group"),
                new TaskItem(Guid.NewGuid().ToString(), "Some System Task"),
                new TaskItem(Guid.NewGuid().ToString(), "Added to My Day")
                {
                    IsMyDay = true
                },
                new TaskItem(Guid.NewGuid().ToString(), "Scheduled to the future")
                {
                    Schedule = new TaskItemSchedule
                    {
                        Due = DateTime.Now.AddDays(1)
                    }
                },
                new TaskItem(Guid.NewGuid().ToString(), "Scheduled in the past")
                {
                    Schedule = new TaskItemSchedule
                    {
                    Due = DateTime.Now.AddDays(-1)
                    }
                },
                new TaskItem(Guid.NewGuid().ToString(), "Reminder task")
                {
                    Schedule = new TaskItemSchedule
                    {
                        Reminder = DateTime.Now.AddDays(-1)
                    }
                }
            });
            _taskLists[4].Tasks.AddRange(new[]
            {
                new TaskItem(Guid.NewGuid().ToString(), "User task 1"),
                new TaskItem(Guid.NewGuid().ToString(), "User task 2"),
                new TaskItem(Guid.NewGuid().ToString(), "User task 3")
            });

            _taskLists[5].Tasks.AddRange(new[]
            {
                new TaskItem(Guid.NewGuid().ToString(), "Another test task 1"),
                new TaskItem(Guid.NewGuid().ToString(), "Another test task 2"),
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