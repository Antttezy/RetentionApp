using Microsoft.EntityFrameworkCore;
using RetenionApp.Data;
using RetenionApp.Models;
using System.Linq;
using System.Threading.Tasks;

namespace RetenionApp.Services
{
    public class UserRepository : IRepository<User>
    {
        private readonly RetentionContext _context;

        public UserRepository(RetentionContext context)
        {
            _context = context;
        }

        public async Task Add(User item)
        {
            await _context.Users.AddAsync(item);
            await _context.SaveChangesAsync();
        }

        public Task<IQueryable<User>> All()
        {
            return Task.FromResult(_context.Users.AsNoTracking());
        }

        public async Task<User> Get(int id)
        {
            var user = await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task Remove(User item)
        {
            _context.Users.Remove(item);
            await _context.SaveChangesAsync();
        }

        public async Task Update(User item)
        {
            _context.Users.Update(item);
            await _context.SaveChangesAsync();
        }
    }
}
