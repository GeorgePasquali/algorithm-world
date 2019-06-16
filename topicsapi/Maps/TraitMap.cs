using topicsapi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace topicsapi.Maps{
    #pragma warning disable CS1591
       public class TraitMap
    {
        public TraitMap(EntityTypeBuilder<Trait> entityBuilder)
        {
            entityBuilder.HasKey(x => x.Id);
            entityBuilder.ToTable("traits");

            entityBuilder.Property(x => x.Id).HasColumnName("id");
            entityBuilder.Property(x => x.Title).HasColumnName("title");
            entityBuilder.Property(x => x.Description).HasColumnName("description");
            entityBuilder.Property(x => x.ImageUrl).HasColumnName("imageurl");
            entityBuilder.Property(x => x.NoSQLArticlePage).HasColumnName("nosqlarticlepage");
            entityBuilder.Property(x => x.TopicId).HasColumnName("topic_id");
        }
    }
    #pragma warning restore CS1591
}