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
        private readonly IObjectContainer objectContainer;

        public ContainerBootstrap(IObjectContainer objectContainer)
        {
            this.objectContainer = objectContainer;
        }

        [BeforeScenario]
        public void InitializeWebDriver()
        {
            TaskRepository taskRepository = new TaskRepository();
            objectContainer.RegisterInstanceAs<ITaskRepository>(taskRepository);
        }
    }
}