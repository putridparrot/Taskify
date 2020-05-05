using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Taskify.Data.Domain;

namespace Taskify.Data.SqlServer
{
    public class TaskItemScheduleEntityTypeConfiguration : IEntityTypeConfiguration<TaskItemSchedule>
    {
        public void Configure(EntityTypeBuilder<TaskItemSchedule> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Due).HasColumnName("DueDate").IsRequired(false);
            builder.Property(t => t.Reminder).HasColumnName("Reminder").IsRequired(false);
        }
    }
}