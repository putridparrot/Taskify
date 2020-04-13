using System;
using NUnit.Framework;
using System.Linq;
using TechTalk.SpecFlow;
using Taskify.Data.Domain;
using Taskify.Data.Services;

namespace Tests.Taskify.Data
{
    [Binding]
    public class AddRemovalOfTaskListsSteps
    {
        private readonly TaskService taskService;

        public AddRemovalOfTaskListsSteps(TaskService taskService)
        {
            this.taskService = taskService;
        }

        [Given(@"I have a known set of user lists")]
        public void GivenIHaveAKnownSetOfUserLists()
        {
            taskService.AddTaskList(new TaskList("L1", new TaskListSpecification()
            {
                CanDelete = true
            }));

            taskService.AddTaskList(new TaskList("L2", new TaskListSpecification()
            {
                CanDelete = true
            }));

            taskService.AddTaskList(new TaskList("L3", new TaskListSpecification()
            {
                CanDelete = true
            }));
        }

        [Given(@"I add a new list (.*)")]
        public void GivenIAddANewList(string listName)
        {
            taskService.AddTaskList(new TaskList(listName, new TaskListSpecification()
            {
                CanDelete = true
            }));

            
        }

        [Given(@"I remove a list (.*)")]
        public void GivenIRemoveAList(string listName)
        {
            taskService.RemoveTaskList(listName);
            
        }

        [Then(@"I expect to see (.*) (.*) list in the user defined list")]
        public void ThenIExpectToSeeListInTheUserDefinedList(int count, string listName)
        {
            Assert.IsNotNull(taskService.FindList(listName));
        }
    }
}
