using topicsapi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System.Linq;
namespace topicsapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public TopicsController(ApiDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// This method shows all topics
        /// </summary>
        /// <returns></returns>
        ///<remarks>
        /// Sample request
        /// GET/Topic
        /// </remarks> 
        [HttpGet]
        public object Get()
        {
            return _context.Topics.Select((c) => new
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                ImageUrl = c.ImageUrl
            }).ToList();
        }

        /// <summary>
        /// This method shows all blogs by title
        /// </summary>
        /// <param name="title"></param>
        /// <returns></returns>
        ///<remarks>
        /// Sample request
        /// GET/Blog/title1
        /// </remarks>
        [HttpGet("{title}")]
        public object GetByTitle(string title)
        {
            return _context.Topics.Where(b => b.Title == title).Select((c) => new
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description
            }).ToList();
        }

    }
}