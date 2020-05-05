using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Taskify.Data.Domain;

namespace Taskify.Data.SqlServer
{
    public class TaskStepEntityTypeConfiguration : IEntityTypeConfiguration<TaskStep>
    {
        public void Configure(EntityTypeBuilder<TaskStep> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Name).IsRequired();
        }
    }
}

