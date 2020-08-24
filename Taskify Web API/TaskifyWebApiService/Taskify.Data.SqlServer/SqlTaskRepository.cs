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
                new TaskList(0, "My Day", new TaskListSpecification {CanDelete = false, IsUserGenerated = false}, iconName:"MyDay"),
                new TaskList(1, "Important", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Important"),
                new TaskList(2, "Planned", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Planned"),
                new TaskList(3, "Assigned to you", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"AssignedToYou"),
                new TaskList(4, "Flagged email", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Flagged"),
                new TaskList(5, "Tasks", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"Tasks"),
                // user added
                new TaskList(6, "UserTasks1", new TaskListSpecification {CanDelete = true, IsUserGenerated = true}),
                new TaskList(7, "UserTasks2", new TaskListSpecification {CanDelete = true, IsUserGenerated = true})
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