using Microsoft.AspNetCore.Components;
using Skclusive.Material.Icon;
using Taskify.Icon;

namespace Taskify.Client.Utils
{
    public static class TaskIcon
    {
        public static RenderFragment GetIconFor(string iconName)
        {
            var iconType = typeof(ListIcon);
            switch (iconName)
            {
                case "Tasks":
                    iconType = typeof(HomeOutlined);
                    break;
                case "MyDay":
                    iconType = typeof(WbSunnyOutlined);
                    break;
                case "Important":
                    iconType = typeof(StarBorderOutlined);
                    break;
                case "Planned":
                    iconType = typeof(DateRangeOutlined);
                    break;
                case "AssignedToYou":
                    iconType = typeof(PersonOutlineOutlined);
                    break;
                case "Flagged":
                    iconType = typeof(FlagOutlined);
                    break;
                default:
                    iconType = typeof(FormatListBulleted);
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
