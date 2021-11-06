using System;
using System.Threading.Tasks;
using PowerArgs;
using Taskify.Service.Client.Services;

namespace Taskify
{
    /*
     * As inspiration look at https://github.com/todotxt/todo.txt-cli/wiki/Usage
     * CLI commands
     */
    [StickyArgPersistence(typeof(ArgumentsPersistenceProvider))]
    public class Arguments
    {
        private readonly Lazy<IDataService> _dataService;

        public Arguments()
        {
            _dataService = new Lazy<IDataService>(
                () => new DataService(String.IsNullOrEmpty(Url) ? "http://localhost:5000/api" : Url)
            );
        }

        // Usage: -U "http://localhost:5000/api"
        [StickyArg,
         ArgDescription("Set the Url of the Taskify Server (stored in %APPDATA%\\Taskify\\Client")]
        public string Url { get; set; }

        /// <summary>
        /// lsg (to list task groups), with arg after
        /// </summary>
        [ArgActionMethod, 
         ArgDescription("Lists groups (task group index or zero for all groups)")]
        public async Task Lsg(int taskGroupIndex = 0)
        {
            await ArgumentsHelper.RenderTaskGroups(_dataService.Value.IterateTaskGroups(taskGroupIndex));
        }

        /// <summary>
        /// ls (to list tasks), with arg after, use as search, i.e. list "My Task" (as well as multiple args) as &&
        /// important - use the ls line number, i.e.important 4 to make ls item 4 important(important lines differ in colour)
        /// </summary>
        [ArgActionMethod,
         ArgDescription("Lists tasks (task group index or zero for tasks on all groups)")]
        public async Task Ls(int taskGroupIndex = 0, int taskIndex = 0)
        {
            await ArgumentsHelper.RenderTaskItems(_dataService.Value.IterateTaskLists(taskGroupIndex, taskIndex));
        }

        [ArgActionMethod, 
         ArgDescription("Lists important tasks")]
        public async Task Lsi(int taskGroupIndex = 0)
        {
            await ArgumentsHelper.RenderTaskItems(_dataService.Value.IterateTaskLists(taskGroupIndex, 0, taskItem => taskItem.IsImportant));
        }

        [ArgActionMethod,
         ArgDescription("Lists assigned to you tasks")]
        public async Task Lsa()
        {
            Console.WriteLine("lsa - not Implemented");
        }

        [ArgActionMethod,
         ArgDescription("Lists my day tasks")]
        public async Task Lsm()
        {
            await ArgumentsHelper.RenderTaskItems(_dataService.Value.IterateTaskLists(0, 0, taskItem => taskItem.IsMyDay));
        }

        [ArgActionMethod,
         ArgDescription("Mark a task as done")]
        public async Task Done()
        {
            await ArgumentsHelper.RenderTaskItems(_dataService.Value.IterateTaskLists(0, 0, taskItem => taskItem.IsCompleted));
        }

        [ArgActionMethod,
         ArgDescription("Remove a task")]
        public void Rm()
        {
            Console.WriteLine("rm - not Implemented");
        }

        /// <summary>
        ///  Add "My Task" (to add a task) (should get a number assigned)
        /// </summary>
        [ArgActionMethod,
         ArgDescription("Add a task")]
        public void Add()
        {
            Console.WriteLine("add - not Implemented");
        }

        [HelpHook, ArgShortcut("-?"), ArgDescription("Shows help")]
        public bool Help { get; set; }
    }
}