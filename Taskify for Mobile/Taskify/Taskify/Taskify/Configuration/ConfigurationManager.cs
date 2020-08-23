using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using Newtonsoft.Json;

namespace Taskify.Configuration
{
    public class ConfigurationManager
    {
        private static ConfigurationManager _appSettings;

        public static ConfigurationManager AppSettings
        {
            get
            {
                if (_appSettings == null)
                {
                    var appSettingsResourceStream =
                        Assembly.GetAssembly(typeof(ConfigurationManager)).GetManifestResourceStream("Taskify.appsettings.json");
                    if (appSettingsResourceStream != null)
                    {
                        using (var sr = new StreamReader(appSettingsResourceStream))
                        {
                            var json = sr.ReadToEnd();
                            _appSettings = JsonConvert.DeserializeObject<ConfigurationManager>(json);
                        }
                    }
                }

                return _appSettings;
            }
        }

        public string Url { get; set; }
    }
}
