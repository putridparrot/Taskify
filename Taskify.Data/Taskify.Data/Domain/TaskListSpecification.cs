namespace Taskify.Data.Domain
{
    public class TaskListSpecification
    {
        public TaskListSpecification()
        {
            this.IsUserGenerated = true;
        }

        public bool CanDelete { get; set; }
        public bool CanRename { get; set; }
        public bool CanShare { get; set; }
        public bool CanDuplicate { get; set; }
        public bool IsImportantTaskAllowed { get; set; }
        public bool IsMyDayTaskAllowed { get; set; }

        public bool IsUserGenerated { get; set; }

    }
}