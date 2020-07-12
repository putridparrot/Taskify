using Microsoft.AspNetCore.Components;
using Skclusive.Material.Icon;

namespace Taskify.Client.Utils
{
    public static class TaskIcon
    {
        public static RenderFragment GetIconFor(int id)
        {
            var iconType = typeof(ListIcon);
            switch (id)
            {
                case 0:
                    iconType = typeof(HomeIcon);
                    break;
                case 1:
                    iconType = typeof(NotificationImportantIcon);
                    break;
                case 2:
                    iconType = typeof(AssignmentIcon);
                    break;
                case 3:
                    iconType = typeof(PersonIcon);
                    break;
                case 4:
                    iconType = typeof(WorkIcon);
                    break;
            }

            return builder =>
            {
                builder.OpenComponent(0, iconType);
                builder.CloseComponent();
            };
        }
    }

}
