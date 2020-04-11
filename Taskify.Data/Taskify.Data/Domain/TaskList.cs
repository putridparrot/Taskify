namespace Taskify.Data.Domain
{
    public abstract class TaskList
    {
        public TaskList(string name)
        {
            Name = name;
        }

        public string Name { get; }
    }
}
