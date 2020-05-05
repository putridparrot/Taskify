using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Taskify.Data.Domain;

namespace Taskify.Data.SqlServer
{
    public class TaskListEntityTypeConfiguration : IEntityTypeConfiguration<TaskList>
    {
        public void Configure(EntityTypeBuilder<TaskList> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Name).HasColumnName("name").IsRequired(true);
        }
    }
}