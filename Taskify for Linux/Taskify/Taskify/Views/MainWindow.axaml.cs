﻿using Avalonia;
using Avalonia.Controls;
using Avalonia.Markup.Xaml;
using Taskify.Service.Client.Services;
using Taskify.ViewModels;

namespace Taskify.Views
{
    public class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
#if DEBUG
            this.AttachDevTools();
#endif
        }

        private void InitializeComponent()
        {
            AvaloniaXamlLoader.Load(this);
        }
    }
}
