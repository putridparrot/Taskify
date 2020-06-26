using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Taskify.Controls
{
    [TemplatePart(Name="Border_part", Type = typeof(Border))]
    public class TaskDisplayControl : Control
    {
        static TaskDisplayControl()
        {
            DefaultStyleKeyProperty.OverrideMetadata(typeof(TaskDisplayControl), new FrameworkPropertyMetadata(typeof(TaskDisplayControl)));
        }

        public TaskDisplayControl()
        {
        }

        private Border border;
        public override void OnApplyTemplate()
        {
            base.OnApplyTemplate();
            this.border = (Border) GetTemplateChild("Border_part");
        }

        public string Content
        {
            get { return (string)GetValue(ContentProperty); }
            set { SetValue(ContentProperty, value); }
        }
        public static readonly DependencyProperty ContentProperty =
            DependencyProperty.Register("Content", typeof(string), typeof(TaskDisplayControl), new PropertyMetadata("", new PropertyChangedCallback(ContentChanged)));
        
        public bool IsSelected
        {
            get { return (bool)GetValue(IsSelectedProperty); }
            set { SetValue(IsSelectedProperty, value); }
        }
        
        public static readonly DependencyProperty IsSelectedProperty =
            DependencyProperty.Register("IsSelected", typeof(bool), typeof(TaskDisplayControl), 
                new PropertyMetadata(false,new PropertyChangedCallback(IsSelectedChanged)));

        private static void IsSelectedChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            TaskDisplayControl taskDisplayControl = (TaskDisplayControl) d;
            taskDisplayControl.SelectionChanged((bool) e.NewValue);
        }

        private void SelectionChanged(bool newValue)
        {
            this.border.BeginAnimation(Border.BackgroundProperty,null);
            if (newValue)
            {
                VisualStateManager.GoToState(this, "Selected", newValue);
            }
            else
            {
                VisualStateManager.GoToState(this, "UnSelected", newValue);
            }
        }

        private static void ContentChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
        }
    }
}
