using System;
using Microsoft.EntityFrameworkCore;
using Taskify.Data.Domain;

namespace Taskify.Data.SqlServer
{
    public class TaskifyDbContext: DbContext
    {
        public DbSet<TaskList> TaskLists { get; set; }
        protected TaskifyDbContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = @"Server=WINDOWS-I5FUUVE;Database=Taskify;User Id=TestUser;Password=test;";
            optionsBuilder.UseSqlServer(connectionString);
            optionsBuilder.EnableDetailedErrors(true);
        }
        
        

        
        public TaskifyDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ConfigureEntities();
        }
    }
}


