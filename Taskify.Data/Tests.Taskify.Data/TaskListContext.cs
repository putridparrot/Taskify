using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Taskify.Data.Domain;

namespace Tests.Taskify.Data
{
    public class TaskListContext
    {
        public TaskListContext()
        {
            State = new State();
        }

        public State State { get; }
    }
}
