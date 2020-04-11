using System;

namespace Taskify.Data.Domain
{
    public class SmartList : TaskList
    {
        public SmartList(string name, Predicate<TaskItem> filter, bool canHide = true, bool visible = true) :
            base(name)
        {
            Filter = filter;
            CanHide = canHide;
            Visible = visible;
        }


        public Predicate<TaskItem> Filter { get; }
        public bool CanHide { get; }
        public bool Visible { get; }
    }
}
