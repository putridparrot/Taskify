using NUnit.Framework;
using TechTalk.SpecFlow;
using Taskify.Data.Domain;
using Taskify.Data.Services;

namespace Tests.Taskify.Data
{
    [Binding]
    public class AddRemovalOfTaskListsSteps
    {
        private readonly TaskService _taskService;

        public AddRemovalOfTaskListsSteps(TaskService taskService)
        {
            _taskService = taskService;
        }

        [Given(@"I have a known set of user lists")]
        public void GivenIHaveAKnownSetOfUserLists()
        {
            _taskService.AddTaskList(new TaskList("L1", new TaskListSpecification()
            {
                CanDelete = true
            }));

            _taskService.AddTaskList(new TaskList("L2", new TaskListSpecification()
            {
                CanDelete = true
            }));

            _taskService.AddTaskList(new TaskList("L3", new TaskListSpecification()
            {
                CanDelete = true
            }));
        }

        [Given(@"I add a new list (.*)")]
        public void GivenIAddANewList(string listName)
        {
            _taskService.AddTaskList(new TaskList(listName, new TaskListSpecification()
            {
                CanDelete = true
            }));

            
        }

        [Given(@"I remove a list (.*)")]
        public void GivenIRemoveAList(string listName)
        {
            _taskService.RemoveTaskList(listName);
            
        }

        [Then(@"I expect to see (.*) (.*) list in the user defined list")]
        public void ThenIExpectToSeeListInTheUserDefinedList(int count, string listName)
        {
            Assert.IsNotNull(_taskService.FindList(listName));
        }
    }
}
