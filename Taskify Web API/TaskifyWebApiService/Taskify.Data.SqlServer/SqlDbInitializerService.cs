using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Taskify.Data.Services;

namespace Taskify.Data.SqlServer
{
    public class SqlDbInitializerService : IDbInitializerService
    {
        private IServiceScopeFactory scopeFactory;
        public SqlDbInitializerService(IServiceScopeFactory scopeFactory)
        {
            this.ScopeFactory = scopeFactory;
            if (scopeFactory == null)
            {
                throw new ArgumentNullException();
            }

        }

        public IServiceScopeFactory ScopeFactory
        {
            get => scopeFactory;
            set => scopeFactory = value;
        }

        public void Initialize()
        {
            using (var serviceScope = ScopeFactory.CreateScope())
            {
                using (var context = serviceScope.ServiceProvider.GetService<TaskifyDbContext>())
                {
                    // Applies any pending migrations for the context to the database.
                    // Will create the database if it does not already exist.
                //    context.Database.EnsureDeleted();
                    context.Database.EnsureCreated();
                }
            }
        }
        public void SeedData()
        {
            /*using (var serviceScope = _scopeFactory.CreateScope())
            {
                using (var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>())
                {
                    var newcust = new Customer()
                    {
                      
                    };
                    context.Add(newcust);
                    context.SaveChanges();
                }
            }*/
        }
    }
}