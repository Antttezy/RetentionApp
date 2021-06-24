using RetenionApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RetenionApp.Services
{
    public class RollingRetentionProvider : IRollingRetentionProvider
    {
        public int Days { get; set; }

        public RollingRetention GetRollingRetention(IEnumerable<User> users)
        {
            int registeredBefore = users.Count(u => u.Registration <= (DateTime.UtcNow - TimeSpan.FromDays(Days)));
            int loggedAfter = users.Count(u => u.Registration <= (DateTime.UtcNow - TimeSpan.FromDays(Days)) && u.LastActive >= (DateTime.UtcNow - TimeSpan.FromDays(Days)));

            return new RollingRetention
            {
                Days = Days,
                Percentage = ((float)loggedAfter) / registeredBefore
            };
        }
    }
}
