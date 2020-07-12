using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Taskify.Shared.Dto;

namespace Taskify.Shared.Services
{
    public interface IDataService
    {
        Task<List<TaskList>> GetTaskLists();
    }
}
