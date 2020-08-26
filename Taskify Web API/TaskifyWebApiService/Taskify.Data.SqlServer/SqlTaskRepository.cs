using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Taskify.Data.Domain;
using Taskify.Data.Repositories;

namespace Taskify.Data.SqlServer
{
    public class SqlTaskRepository : ITaskRepository
    {
        private TaskifyDbContext taskifyDbContext = new TaskifyDbContext(new DbContextOptions<TaskifyDbContext>());
        private List<TaskList> taskLists;
        public SqlTaskRepository()
        {
            this.taskLists = new List<TaskList>()
            {
                new TaskList(Guid.NewGuid().ToString(), "My Day", new TaskListSpecification {CanDelete = false, IsUserGenerated = false}, iconName:"MyDay", "d7ccc8"),
                new TaskList(Guid.NewGuid().ToString(),"Important", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Important", "fce4ec"),
                new TaskList(Guid.NewGuid().ToString(),"Planned", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Planned", "e0f2f1"),
                new TaskList(Guid.NewGuid().ToString(),"Assigned to you", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"AssignedToYou", "e8f5e9"),
                new TaskList(Guid.NewGuid().ToString(),"Flagged email", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Flagged", "ffe0b2"),
                new TaskList(Guid.NewGuid().ToString(),"Tasks", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Tasks", "9fa8da"),
                
                // user added
                new TaskList(Guid.NewGuid().ToString(),"UserTasks1", new TaskListSpecification {CanDelete = true, IsUserGenerated = true}),
                new TaskList(Guid.NewGuid().ToString(),"UserTasks2", new TaskListSpecification {CanDelete = true, IsUserGenerated = true})
            };
        }

        public List<TaskList> FetchLists()
        {
            return taskifyDbContext.TaskLists.ToList();
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