using Microsoft.AspNetCore.Antiforgery;

namespace SecurityDemo.Antiforgery
{
    public class AntiforgeryMiddleware
    {
        private readonly RequestDelegate _next;

        public AntiforgeryMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        // IMessageWriter is injected into InvokeAsync
        public async Task InvokeAsync(HttpContext httpContext)
        {
            var requestPath = httpContext.Request.Path.Value;

            if (string.Equals(requestPath, "/", StringComparison.OrdinalIgnoreCase)
                ||  httpContext.Request.RouteValues.Any(dc => (dc.Key == "controller"
                                                       && dc.Value.ToString().Equals("weatherforecast", StringComparison.OrdinalIgnoreCase))
                                                       )
                || string.Equals(requestPath, "/index.html", StringComparison.OrdinalIgnoreCase))
            {
                var antiforgery = httpContext.RequestServices.GetRequiredService<IAntiforgery>();
                var tokenSet = antiforgery.GetAndStoreTokens(httpContext);
                httpContext.Response.Cookies.Append("XSRF-TOKEN", tokenSet.RequestToken!,
                    new CookieOptions { HttpOnly = false });
            }

            await _next(httpContext);
        }
    }
}
