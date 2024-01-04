using Microsoft.AspNetCore.Mvc;

namespace SecurityDemo.Controllers
{
    //[ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : Controller
    {
        public class MyComments
        {
            public string name { get; set; }
            public string message { get; set; }
        }

        private readonly ILogger<WeatherForecastController> _logger;
        private static List<MyComments> myComments = new List<MyComments> { 
            new MyComments { name = "Bran", message = "I think the supports of <b>all types of data</b> is reaaly amazing" }, 
            new MyComments { name = "TestUserWithAlongName", message = "Well yeah, that's the service I've looking for quite <i>a long time</i>." },
            new MyComments {name="admin",message="Looks good <img style='width:80px' src='https://cdn.sanity.io/images/yk5gp8um/marketplace-prod/410f8fd545ee0cbb526884a8ac75c237c62d7d20-1200x349.jpg?h=500&auto=format'/>"}
        };

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [IgnoreAntiforgeryToken]
        public List<MyComments> Get()
        {
            return myComments;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Post([FromBody]MyComments comments)
        {
            if (!string.IsNullOrEmpty(comments.name) && comments.name.Length > 1 && !string.IsNullOrEmpty(comments.message))
            {
                myComments.Add(comments);
                return Ok();
            }

            return BadRequest("You failed to bypass the validation. Try again to attach the system");

        }
    }
}