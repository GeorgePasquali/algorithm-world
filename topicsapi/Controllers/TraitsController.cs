using topicsapi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System.Linq;
namespace topicsapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TraitsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public TraitsController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public object Get()
        {
            return _context.Traits.Select((c) => new
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                NoSqlArticlePage = c.NoSQLArticlePage,
                ImageUrl = c.ImageUrl,
                TopicId = c.TopicId
            }).ToList();
        }
          
        [HttpGet("{title}")]
        public object GetByTitle(string title)
        {
            return _context.Traits.Where(b => b.Title == title).Select((c) => new
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                NoSqlArticlePage = c.NoSQLArticlePage,
                ImageUrl = c.ImageUrl,
                TopicId = c.TopicId
            }).ToList();
        }

        [HttpGet("byid/{id}")]
        public object GetById(int id)
        {
            return _context.Traits.Where(b => b.TopicId == id).Select((c) => new
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                NoSqlArticlePage = c.NoSQLArticlePage,
                ImageUrl = c.ImageUrl,
                TopicId = c.TopicId
            }).ToList();
        }

    }
}