using System;
using System.Linq;
using BoDi;
using Microsoft.Practices.Unity;
using Taskify.Data.Repositories;
using TechTalk.SpecFlow;

namespace Tests.Taskify.Data.Support
{
    [Binding]
    public  class ContainerBootstrap
    {
        private readonly IObjectContainer _objectContainer;

        public ContainerBootstrap(IObjectContainer objectContainer)
        {
            _objectContainer = objectContainer;
        }

        [BeforeScenario]
        public void InitializeWebDriver()
        {
            var taskRepository = new TaskRepository();
            _objectContainer.RegisterInstanceAs<ITaskRepository>(taskRepository);
        }
    }
}