using System.Collections.Generic;
using Newtonsoft.Json;

namespace Taskify.Service.Client.Dto
{
    public class TaskList
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("tasks")]
        public List<TaskItem> Tasks { get; set; }

        [JsonProperty("specification")]
        public TaskListSpecification Specification { get; set; }
        [JsonProperty("isSelected")]
        public bool IsSelected { get; set; }
        [JsonProperty("IconName")]
        public string IconName { get; set; }
    }
}