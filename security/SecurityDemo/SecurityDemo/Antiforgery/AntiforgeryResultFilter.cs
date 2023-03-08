using Microsoft.AspNetCore.Mvc.Core.Infrastructure;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace SecurityDemo.Antiforgery
{
    public class AntiforgeryResultFilter : IAlwaysRunResultFilter
    {
        public void OnResultExecuted(ResultExecutedContext context)
        {
        }

        public void OnResultExecuting(ResultExecutingContext context)
        {
            if (context.Result is IAntiforgeryValidationFailedResult result)
            {
                context.Result = new ObjectResult(new { type = "1", message = "CSRF token valiation failed!" })
                {
                    StatusCode = (int)HttpStatusCode.BadRequest
                };
            }
        }

    }
}
