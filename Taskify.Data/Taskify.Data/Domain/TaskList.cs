using System.Collections.Generic;

namespace Taskify.Data.Domain
{
    public class TaskList 
    {
        public TaskList()
        {
        }

        public TaskList(string name, TaskListSpecification taskListSpecification)
        {
            Specification = taskListSpecification;
            Name = name;
            Tasks = new List<TaskItem>();
        }

        public int Id  { get; set; }
        public string Name { get; }

        public List<TaskItem> Tasks { get; }

        public TaskListSpecification Specification { get; }
        public bool IsSelected { get; set; }
    }
}
