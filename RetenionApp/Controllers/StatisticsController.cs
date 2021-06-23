using Microsoft.AspNetCore.Mvc;
using RetenionApp.Models;
using RetenionApp.Services;
using System.Threading.Tasks;

namespace RetenionApp.Controllers
{
    [ApiController]
    public class StatisticsController : Controller
    {
        private IRepository<User> _users;
        private readonly IRollingRetentionProvider _rollingRetentionProvider;
        private readonly ILifetimeProvider _lifetimeProvider;

        public StatisticsController(IRepository<User> Users, IRollingRetentionProvider rollingRetentionProvider, ILifetimeProvider lifetimeProvider)
        {
            _users = Users;
            _rollingRetentionProvider = rollingRetentionProvider;
            _lifetimeProvider = lifetimeProvider;
        }

        [HttpGet]
        [Route("retention")]
        public async Task<IActionResult> Retention()
        {
            return Json(_rollingRetentionProvider.GetRollingRetention(await _users.All()));
        }

        [HttpGet]
        [Route("lifetime")]
        public async Task<IActionResult> Lifetime()
        {
            return Json(_lifetimeProvider.GetLifetimes(await _users.All()));
        }
    }
}
