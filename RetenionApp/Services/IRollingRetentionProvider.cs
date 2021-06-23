using RetenionApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetenionApp.Services
{
    public interface IRollingRetentionProvider : IStatisticsProvider
    {
        RollingRetention GetRollingRetention(IEnumerable<User> users);
    }
}
