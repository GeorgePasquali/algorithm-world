using topicsapi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace topicsapi.Maps{
    #pragma warning disable CS1591
       public class TopicMap
    {
        public TopicMap(EntityTypeBuilder<Topic> entityBuilder)
        {
            entityBuilder.HasKey(x => x.Id);
            entityBuilder.ToTable("topics");

            entityBuilder.Property(x => x.Id).HasColumnName("id");
            entityBuilder.Property(x => x.Title).HasColumnName("title");
            entityBuilder.Property(x => x.Description).HasColumnName("description");
        }
    }
    #pragma warning restore CS1591
}