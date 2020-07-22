using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using System;
using System.Configuration;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace Web.Utilities
{
    public class RecaptchaUtility
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger _logger;
        private readonly SiteConfig _config;

        public RecaptchaUtility(HttpClient httpClient, ILogger logger, IOptionsMonitor<SiteConfig> config)
        {
            _config = config.CurrentValue;
            _httpClient = httpClient ?? throw new ArgumentNullException(nameof(httpClient));
            _logger = logger;
        }

        public string ResponseCodeFromRequest(string responseCode) =>
            responseCode != null ? responseCode : null;

        private async Task<bool> ValidateRecaptcha(string responseCode)
        {
            var recaptchResult = await Validate(responseCode);
            if (recaptchResult != null && !recaptchResult.IsSuccess)
                return false;
            return true;
        }

        public async Task<bool> IsRecaptrueValidated(string responseCode)
        {
            bool result = true;
            try
            {
                if (_config.IsRecaptchaEnabled)
                {
                    if (!await ValidateRecaptcha(responseCode))
                        result = false;
                }
            }
            catch (Exception)
            {
                if (_config.IsRecaptchaEnabled)
                {
                    if (!await ValidateRecaptcha(responseCode))
                        result = false;
                }
            }

            return result;
        }

        public async Task<RecaptchaResult> Validate(string responseCode)
        {
            if (!_config.IsRecaptchaEnabled)
                return RecaptchaResult.Success();
            if (string.IsNullOrWhiteSpace(responseCode))
                return RecaptchaResult.Failure("Validation failed");
            var secret = _config.RecaptchaSiteSeKey;
            var request = new HttpRequestMessage
            (
                HttpMethod.Post,
                new Uri($"https://www.google.com/recaptcha/api/siteverify?secret={secret}&response={responseCode}")
            );
            try
            {
                var response = await _httpClient.SendAsync(request);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    var result = JObject.Parse(content);
                    if ((bool)result.SelectToken("success"))
                        return RecaptchaResult.Success();
                    return RecaptchaResult.Failure("Validation failed");
                }
            }
            catch (Exception exception)
            {
                _logger.LogError($"Recaptcha failed. {exception.Message}", exception);
                return RecaptchaResult.Failure(exception.Message);
            }
            return null;
        }
        public static string DefaultInvalidMessage => "Failed to verify user is human";
    }

    public class RecaptchaResult
    {
        public bool IsSuccess { get; private set; }

        public string Message { get; private set; }

        public static RecaptchaResult Success() => new RecaptchaResult { IsSuccess = true };

        public static RecaptchaResult Failure(string message) => new RecaptchaResult { IsSuccess = false, Message = message };
    }
}
