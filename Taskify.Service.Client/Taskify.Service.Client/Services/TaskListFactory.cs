namespace Taskify.Service.Client.Dto
{
    public static class TaskListFactory
    {
        public static TaskList CreateTaskList(int id, string name, string uri)
        {
            return new TaskList
            {
                Id = id,
                Name = name,
            };
        }

        public static TaskList CreateTaskList(int id, string name, string uri, bool isUserGenerated)
        {
            return new TaskList
            {
                Id = id,
                Name = name,
                Specification = CreateTaskListSpecification(isUserGenerated)
            };
        }

        public static TaskListSpecification CreateTaskListSpecification(bool isUserGenerated)
        {
            return new TaskListSpecification
            {
                IsUserGenerated = isUserGenerated
            };
        }
    }
}