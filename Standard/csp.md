**Example**

Define nonce service which will generate a dynamic string
```csharp
namespace Example.NonceService.Abstraction
{
    public interface INonceService
    {
        string GetNonce();
    }
}
namespace Example.NonceService
{
    public class NonceService:INonceService
    {
        private string _nonce;
        public string GetNonce()
        {
            if (string.IsNullOrEmpty(_nonce))
            {
                _nonce = Guid.NewGuid().ToString().Replace("-","");
            }
            return _nonce;
        } 
    }
}
```
Register the once service in Program.cs or Starup.cs and inject it into the controller
```csharp
  //register nonce service
  services.AddScoped<INonceService, NonceService.NonceService>()
  //
  public class ExampleController : Controller
  {
    private readonly INonceService _nonceService;
    public ExampleController(INonceService nonceService){
        _nonceService = nonceService;
    }
  }
```
Using nonce service and return the dynamic nonce back to Front End when user enter into the page and apply it onto the script tags
To understand more details of gtm part please refer to: [Content security policy](https://developers.google.com/tag-platform/security/guides/csp)
```html
   <script nonce='@ViewBag.DynamicNonce' src="~/appsettings.js?v=@Startup.SystemVersion"></script>
   <script nonce="@ViewBag.DynamicNonce" src="@Model.OnetrustUrl" charset="UTF-8" data-domain-script="@Model.OnetrustToken"></script>
   <script nonce='@ViewBag.DynamicNonce' src="~/index.js?v=@Startup.SystemVersion"></script>
    <script id="gtmscript" async nonce='@ViewBag.DynamicNonce'>
            //In case you are using GTM we can put the nonce on gtm script tag and also grant it to a variable so that gtm could use it in the custom scripts
             window.nonceForCustomScripts = '@ViewBag.DynamicNonce';
            (function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                    'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                });var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl + '&gtm_auth=@ViewBag.SightConfig.GaToken&gtm_preview=@ViewBag.SightConfig.GaEnv&gtm_cookies_win=x'; var n = d.querySelector('[nonce]');
                n && j.setAttribute('nonce', n.nonce || n.getAttribute('nonce')); f.parentNode.insertBefore(j, f);
     })(window, document, 'script', 'dataLayer', '@ViewBag.SightConfig.GaGid');</script>
```

In order to better maintain the csp we recommand to use a more structured way and categorized different items according to the tools/resources you are using. In that case if you decide to remove a tool later, you can just delete the whole category
For example you can put related items into appsettings.json
```json
  {
       "SecurityConfigs": {
           "allstrict": {
              "default-src": [ "'none'" ],
              "script-src": [ "'self'", "'nonce-placehoder'", "'strict-dynamic'" ],
              "style-src": [ "'self'" ],
              "object-src": [ "'none'" ],
              "base-uri": [ "'self'" ],
              "form-action": [ "'self'" ],
              "manifest-src": [ "'self'" ],
              "frame-ancestors": ["'none'"]
            },
            "hotJar": {
              "img-src": [ "https://*.hotjar.com" ],
              "connect-src": [
                "https://*.hotjar.com",
                "https://*.hotjar.io",
                "wss://*.hotjar.com"
              ],
              "frame-src": [ "https://*.hotjar.com" ]
            },
            "stripe": {
              "connect-src": [
                "https://api.stripe.com",
                "https://js.stripe.com"
              ],
              "frame-src": [
                "https://*.js.stripe.com",
                "https://js.stripe.com",
                "https://hooks.stripe.com",
                "https://m.stripe.network"
              ]
            },
       }
  }
```
Applying the csp to the response
```csharp
            var temp = Configuration.GetSection("SecurityConfigs").Get<IDictionary<string, IDictionary<string, string[]>>>();
            var sb = new StringBuilder();
            Dictionary<string, List<string>> keyValuePairs = new();
            foreach (var item in temp.Values.SelectMany(x => x))
            {
                if (!keyValuePairs.ContainsKey(item.Key))
                    keyValuePairs[item.Key] = new();
                keyValuePairs[item.Key].AddRange(item.Value);
            }
            foreach (var key in keyValuePairs.Keys)
            {
                sb.Append(key);
                sb.Append(" ");
                sb.Append(string.Join(" ", keyValuePairs[key].Distinct()));
                sb.Append(";");
            }
            //Security header
            app.Use(async (ctx, next) =>
            {
                ctx.Response.OnStarting((state) =>
                    {
                        var nonceService = ctx.RequestServices.GetService<INonceService>();
                        if (state is HttpContext c)
                        {
                            AppendHeaderIfMissing(ctx, "Content-Security-Policy", sb.ToString().Replace("nonce-placehoder", "nonce-" + nonceService.GetNonce()));
                        }
                        return Task.CompletedTask;
                    }, ctx);
                await next();
            });
            
        private void AppendHeaderIfMissing(HttpContext ctx, string key, string value)
        {
            if (!ctx.Response.Headers.ContainsKey(key))
                ctx.Response.Headers.Add(key, value);
        }
```
