using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
using TechTalk.SpecFlow;
using Taskify.Data.Domain;
using Taskify.Data.Services;


namespace Tests.Taskify.Data
{
    [Binding]
    public class TaskListItemsSteps
    {
        private readonly TaskService _taskService;

        private List<TaskItem> _results;

        public TaskListItemsSteps(TaskService taskService)
        {
            _taskService = taskService;
        }

        [Given(@"I have (.*) for (.*) with (.*)")]
        public void GivenIHaveFor(int tasks, string taskList,bool isUserGenerated)
        {
            GenerateTasks(tasks, taskList, isUserGenerated);
        }

        [When(@"I request (.*)'s tasks for (.*)")]
        public void WhenIRequestSTasks(string taskList, bool isUserGenerated)
        {
            var list = _taskService.FindList(taskList, isUserGenerated);
            this._results = list.Tasks;
        }

        [Then(@"the resultant list should have (.*) items")]
        public void ThenTheResultantListShouldHaveItems(int expected)
        {
            Assert.AreEqual(expected, _results.Count);
        }

        [Given(@"I have a known state of tasks")]
        public void GivenIHaveAKnownStateOfTasks()
        {
        }

        private void GenerateTasks(int numTasks, string taskListName, bool isUserGenerated)
        {
            if (!isUserGenerated)
            {
                var taskList = _taskService.FindList(taskListName).First();
                for (var i = 0; i < numTasks; i++)
                {
                    taskList.Tasks.Add(new TaskItem("Task:" + i));
                }
            }
            else
            {
                TaskList taskList = new TaskList(taskListName, new TaskListSpecification() { CanDelete = true });
                for (var i = 0; i < numTasks; i++)
                {
                    taskList.Tasks.Add(new TaskItem("Task:" + i));
                }
                _taskService.AddTaskList(taskList);
            }
            
        }
    }
}
