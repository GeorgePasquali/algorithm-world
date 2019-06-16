using topicsapi.Maps;
using Microsoft.EntityFrameworkCore;
using topicsapi.Models;
using System;

namespace topicsapi.Models{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
       : base(options)
        {

        }
        public DbSet<Topic> Topics { get; set; }

        public DbSet<Trait> Traits { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new TopicMap(modelBuilder.Entity<Topic>());
            new TraitMap(modelBuilder.Entity<Trait>());
        }
    }
}