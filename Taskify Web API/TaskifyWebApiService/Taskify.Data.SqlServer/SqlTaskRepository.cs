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
                new TaskList("My Day", new TaskListSpecification {CanDelete = false, IsUserGenerated = false}, iconName:"WbSunnyOutlined"),
                new TaskList("Important", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"StarBorderOutlined"),
                new TaskList("Planned", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"DateRangeOutlined"),
                new TaskList("Assigned to you", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"PersonOutlineOutlined"),
                new TaskList("Flagged email", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"FlagOutlined"),
                new TaskList("Tasks", new TaskListSpecification {CanDelete = false, IsUserGenerated = false},iconName:"HomeOutlined"),
                // user added
                new TaskList("UserTasks1", new TaskListSpecification {CanDelete = true, IsUserGenerated = true}),
                new TaskList("UserTasks2", new TaskListSpecification {CanDelete = true, IsUserGenerated = true})
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