using System;
using System.Collections.Generic;
using System.Text;
using Plugin.Settings;
using Plugin.Settings.Abstractions;

namespace Taskify.Configuration
{
    public static class Configuration
    {
        private static ISettings AppSettings => CrossSettings.Current;

        public static string Url
        {
            get => AppSettings.GetValueOrDefault(nameof(Url), String.Empty);
            set => AppSettings.AddOrUpdateValue(nameof(Url), value);
        }

    }
}
