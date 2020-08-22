using System;
using PowerArgs;

namespace Taskify
{
    /*
     * As inspiration look at https://github.com/todotxt/todo.txt-cli/wiki/Usage
     * CLI commands
     */
    public class Arguments
    {
        /// <summary>
        /// ls (to list tasks), with arg after, use as search, i.e. list "My Task" (as well as multiple args) as &&
        /// important - use the ls line number, i.e.important 4 to make ls item 4 important(important lines differ in colour)
        /// </summary>
        [ArgActionMethod, 
         ArgDescription("Lists all tasks")]
        public void ls()
        {
            Console.WriteLine("ls executed");
        }

        [ArgActionMethod, 
         ArgDescription("Lists important tasks")]
        public void lsi()
        {
            Console.WriteLine("lsi executed");
        }

        [ArgActionMethod,
         ArgDescription("Lists assigned to you tasks")]
        public void lsa()
        {
            Console.WriteLine("lsa executed");
        }

        [ArgActionMethod,
         ArgDescription("Lists my day tasks")]
        public void lsm()
        {
            Console.WriteLine("lsm executed");
        }

        [ArgActionMethod,
         ArgDescription("Mark a task as done")]
        public void done()
        {
            Console.WriteLine("done executed");
        }

        [ArgActionMethod,
         ArgDescription("Remove a task")]
        public void rm()
        {
            Console.WriteLine("rm executed");
        }

        /// <summary>
        ///  Add "My Task" (to add a task) (should get a number assigned)
        /// </summary>
        [ArgActionMethod,
         ArgDescription("Add a task")]
        public void add()
        {
            Console.WriteLine("rm executed");
        }

        [HelpHook, ArgShortcut("-?"), ArgDescription("Shows help")]
        public bool Help { get; set; }
    }
}