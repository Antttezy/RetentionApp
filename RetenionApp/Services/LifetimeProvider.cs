using RetenionApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace RetenionApp.Services
{
    public class LifetimeProvider : ILifetimeProvider
    {
        public List<Lifetime> GetLifetimes(IEnumerable<User> users)
        {
            var usersByDays = users.GroupBy(u => (u.LastActive - u.Registration).Days).OrderBy(gr => gr.Key);

            return usersByDays.Select(gr => new Lifetime
            {
                Time = gr.Key,
                UserCount = gr.Count()
            }).ToList();
        }
    }
}
