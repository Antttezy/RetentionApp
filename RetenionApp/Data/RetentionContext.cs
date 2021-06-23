using Microsoft.EntityFrameworkCore;
using RetenionApp.Models;

namespace RetenionApp.Data
{
    public class RetentionContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public RetentionContext(DbContextOptions opts) : base(opts)
        {

        }
    }
}
