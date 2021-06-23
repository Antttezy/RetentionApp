using RetenionApp.Models;
using System.Collections.Generic;

namespace RetenionApp.Services
{
    public interface ILifetimeProvider : IStatisticsProvider
    {
        List<Lifetime> GetLifetimes(IEnumerable<User> users);
    }
}
