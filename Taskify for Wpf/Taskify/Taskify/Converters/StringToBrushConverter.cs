using System;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Linq;
using System.Windows.Data;
using System.Windows.Markup;
using System.Windows.Media;
using MahApps.Metro.Controls;
using MahApps.Metro.IconPacks;
using Taskify.ViewModels;

namespace Taskify.Converters
{
    [MarkupExtensionReturnType(typeof(Brush))]
    public class StringToBrushConverter : MarkupExtension, IValueConverter
    {
        public override object ProvideValue(IServiceProvider serviceProvider)
        {
            return this;
        }

        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (null == value)
            {
                return null;
            }
            if (value is Color color)
            {
                return new SolidColorBrush(color);
            }

            if (value is string s)
            {
                var brushConverter = new BrushConverter();
                var brush = (Brush) brushConverter.ConvertFromString("#" + s);
                return brush;
            }

            var type = value.GetType();
            throw new InvalidOperationException("Unsupported type [" + type.Name + "]");
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }

}
