using Microsoft.AspNetCore.Antiforgery;

namespace SecurityDemo.Antiforgery
{
    public class AntiforgeryAdditionalDataProvider : IAntiforgeryAdditionalDataProvider
    {
        public string GetAdditionalData(HttpContext context)
        {
            return String.Empty;
        }

        public bool ValidateAdditionalData(HttpContext context, string additionalData)
        {
            return true;
        }
    }
}
