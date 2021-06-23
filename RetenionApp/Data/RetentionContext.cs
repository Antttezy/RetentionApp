using Microsoft.EntityFrameworkCore;
using RetenionApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
