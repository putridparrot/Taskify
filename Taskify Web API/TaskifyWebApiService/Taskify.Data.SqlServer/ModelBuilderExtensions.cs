using Microsoft.EntityFrameworkCore;
using Taskify.Data.Domain;

namespace Taskify.Data.SqlServer
{
    public static class ModelBuilderExtensions
    {
        public static void ConfigureEntities(this ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TaskListEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new TaskStepEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new TaskNoteEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new TaskItemScheduleEntityTypeConfiguration());
        }
    }
}