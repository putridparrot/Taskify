using System;

namespace Taskify
{
    /*
     * As inspiration look at https://github.com/todotxt/todo.txt-cli/wiki/Usage
     * CLI commands
     * add "My Task" (to add a task) (should get a number assigned)
     * ls (to list tasks), with arg after, use as search, i.e. list "My Task" (as well as multiple args) as &&
     * important - use the ls line number, i.e. important 4 to make ls item 4 important (important lines differ in colour)
     * lsi - list only important tasks
     * lsa - list assigned to you
     * lsm - list my day
     * done - mark task as done
     * rm - remove task 
     */

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
