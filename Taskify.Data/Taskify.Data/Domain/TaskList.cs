using System.Collections.Generic;

namespace Taskify.Data.Domain
{
    public class TaskList
    {
        private TaskListSpecification specification;

        public TaskList(string name, TaskListSpecification taskListSpecification)
        {
            this.specification = taskListSpecification;
            Name = name;
            this.Tasks = new List<TaskItem>();
        }

        public string Name { get; }

        public List<TaskItem> Tasks { get; }

        public TaskListSpecification Specification => specification;
    }
}
