using System.Collections.Generic;

namespace Taskify.Data.Domain
{
    public class TaskList 
    {
        public TaskList()
        {
        }

        public TaskList(int id, string name, TaskListSpecification taskListSpecification, string iconName = "User")
        {
            Id = id;
            Specification = taskListSpecification;
            Name = name;
            Tasks = new List<TaskItem>();
            IconName = iconName;
        }

        public int Id  { get; set; }
        public string Name { get; set; }

        public List<TaskItem> Tasks { get; set; }

        public TaskListSpecification Specification { get; set; }
        public bool IsSelected { get; set; }

        public string IconName { get; set; }
    }
}
