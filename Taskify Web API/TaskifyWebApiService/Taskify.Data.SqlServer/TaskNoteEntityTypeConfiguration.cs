using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Taskify.Data.Domain;

namespace Taskify.Data.SqlServer
{
    public class TaskNoteEntityTypeConfiguration : IEntityTypeConfiguration<TaskNote>
    {
        public void Configure(EntityTypeBuilder<TaskNote> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Note).IsRequired();
        }
    }
}