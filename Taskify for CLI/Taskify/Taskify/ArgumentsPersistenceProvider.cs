using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using PowerArgs;

namespace Taskify
{
    // Simple PersistenceProvider based heavily on PowerArgs default persistence provider
    public sealed class ArgumentsPersistenceProvider : IStickyArgPersistenceProvider
    {
        private static readonly string StickyLocation = $"{Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData)}\\Taskify\\Client\\configuration.ini";

        public void Save(Dictionary<string, string> stickyArgs, string pathInfo)
        {
            var file = pathInfo ?? StickyLocation;

            var folder = Path.GetDirectoryName(file);
            if (folder != null && Directory.Exists(folder) == false)
            {
                Directory.CreateDirectory(folder);
            }

            var lines = (from k in stickyArgs.Keys select k + "=" + stickyArgs[k]).ToArray();
            File.WriteAllLines(file, lines);
        }

        public Dictionary<string, string> Load(string pathInfo)
        {
            var file = pathInfo ?? StickyLocation;

            var configuration = new Dictionary<string, string>();
            if (File.Exists(file) == false)
            {
                return configuration;
            }

            foreach (var line in File.ReadAllLines(file))
            {
                var separator = line.IndexOf("=", StringComparison.Ordinal);
                if (separator < 0 || line.Trim().StartsWith("#"))
                {
                    continue;
                }

                var key = line[..separator].Trim();
                var val = separator == line.Length - 1 ? String.Empty : line[(separator + 1)..].Trim();

                configuration.Add(key, val);
            }

            return configuration;
        }
    }
}