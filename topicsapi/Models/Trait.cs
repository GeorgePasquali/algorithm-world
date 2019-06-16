    
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace topicsapi.Models
{
    public class Trait
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        // link to the nosql database record of the asset
        public string NoSQLArticlePage { get; set; } 
        public string ImageUrl { get; set; }
        [ForeignKey("topicid")]
        public int TopicId { get; set; }
    }
}