using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RetenionApp.Models;
using RetenionApp.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetenionApp.Controllers
{
    [ApiController]
    public class UserController : Controller
    {
        private IRepository<User> _users;

        public UserController(IRepository<User> Users)
        {
            _users = Users;
        }

        [HttpGet]
        [Route("users")]
        [Route("users/{id:int}")]
        public async Task<IActionResult> GetUser(int? id)
        {
            var users = await _users.All();

            if (id.HasValue)
            {
                var user = await users.FirstOrDefaultAsync(u => u.Id == id);

                if (user != null)
                    return Json(user);
                else
                    return NotFound();
            }
            else
            {
                return Json(await users.ToListAsync());
            }
        }

        [HttpPost]
        [Route("users")]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    await _users.Add(user);
                    return Ok();
                }
                catch (Exception)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut]
        [Route("users")]
        public async Task<IActionResult> EditUser([FromBody] User user)
        {
            if (ModelState.IsValid)
            {
                if (await _users.Get(user.Id) != null)
                {
                    try
                    {
                        await _users.Add(user);
                        return Ok();
                    }
                    catch (Exception)
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError);
                    }
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("users/{id:int}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _users.Get(id);

            if (user != null)
            {
                try
                {
                    await _users.Remove(user);
                    return Ok();
                }
                catch (Exception)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }
            }
            else
            {
                return NotFound();
            }
        }
    }
}
