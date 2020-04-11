using System;
using NUnit.Framework;
using System.Linq;
using TechTalk.SpecFlow;
using Taskify.Data.Domain;

namespace Tests.Taskify.Data
{
    [Binding]
    public class AddRemovalOfTaskListsSteps
    {
        private readonly TaskListContext _context;

        public AddRemovalOfTaskListsSteps(TaskListContext context)
        {
            _context = context;
        }

        [Given(@"I have a known set of user lists")]
        public void GivenIHaveAKnownSetOfUserLists()
        {
            _context.State.TaskLists.Add(new UserdefinedList("L1"));
            _context.State.TaskLists.Add(new UserdefinedList("L2"));
            _context.State.TaskLists.Add(new UserdefinedList("L3"));
        }

        [Given(@"I add a new list (.*)")]
        public void GivenIAddANewList(string listName)
        {
            _context.State.TaskLists.Add(new UserdefinedList(listName));
        }

        [Given(@"I remove a list (.*)")]
        public void GivenIRemoveAList(string listName)
        {
            _context.State.RemoveByName(listName);
        }

        [Then(@"I expect to see (.*) (.*) list in the user defined list")]
        public void ThenIExpectToSeeListInTheUserDefinedList(int count, string listName)
        {
            Assert.AreEqual(count, _context.State.TaskLists.Count(l => l.Name == listName));
        }
    }
}
