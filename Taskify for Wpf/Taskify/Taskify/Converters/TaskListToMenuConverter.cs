using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;
using System.Windows.Markup;
using MahApps.Metro.Controls;
using MahApps.Metro.IconPacks;
using Taskify.ViewModels;

namespace Taskify.Converters
{
    [MarkupExtensionReturnType(typeof(object))]
    public class TaskListToMenuConverter : MarkupExtension, IValueConverter
    {
        public override object ProvideValue(IServiceProvider serviceProvider)
        {
            return this;
        }

        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            var menuItems = new HamburgerMenuItemCollection();

            if (value is ObservableCollection<TaskListViewModel> collection)
            {
                foreach (var taskListViewModel in collection.Where(tl => !tl.IsUserGenerated))
                {
                    var menuItem = new HamburgerMenuIconItem
                    {
                        Icon = new PackIconMaterial
                        {
                            Kind = GetIcon(taskListViewModel.IconName)
                        },
                        Label = taskListViewModel.Name
                    };

                    menuItems.Add(menuItem);
                }

                var userGenerated = collection.Where(tl => tl.IsUserGenerated).ToArray();
                if (userGenerated.Length > 0)
                {
                    menuItems.Add(new HamburgerMenuSeparatorItem());
                    foreach (var taskListViewModel in userGenerated)
                    {
                        var menuItem = new HamburgerMenuIconItem
                        {
                            Icon = new PackIconMaterial
                            {
                                Kind = GetIcon(taskListViewModel.IconName)
                            },
                            Label = taskListViewModel.Name
                        };

                        menuItems.Add(menuItem);
                    }
                }

            }


            return menuItems;
        }

        private PackIconMaterialKind GetIcon(string iconName)
        {
            switch (iconName)
            {
                case "MyDay":
                    return PackIconMaterialKind.WeatherSunny;
                case "Important":
                    return PackIconMaterialKind.StarOutline;
                case "Planned":
                    return PackIconMaterialKind.CalendarBlankOutline;
                case "Tasks":
                    return PackIconMaterialKind.HomeOutline;
            }

            return PackIconMaterialKind.FormatListBulleted;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
