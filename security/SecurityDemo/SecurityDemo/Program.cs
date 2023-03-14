using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SecurityDemo.Antiforgery;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//builder.Services.AddControllersWithViews();

#region antiforgery
builder.Services.AddAntiforgery(options =>
{
    // Set Cookie properties using CookieBuilder properties
    options.HeaderName = "X-CSRF-TOKEN";
    //options.SuppressXFrameOptionsHeader = false;
    options.Cookie.Name = "accountweb-antiforgery-token-cookie";
    options.Cookie.HttpOnly = true;
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
});
builder.Services.AddControllersWithViews(options => {
    //options.Filters.Add(new ValidateAntiForgeryTokenAttribute());
    //options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
         options.Filters.Add(new AntiforgeryResultFilter());
     });
builder.Services.AddSingleton<IAntiforgeryAdditionalDataProvider, AntiforgeryAdditionalDataProvider>();
#endregion 

var app = builder.Build();





// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

//Security header
//app.Use(async (context, next) =>
//{
//    context.Response.Headers.Add("Content-Security-Policy", "default-src 'self';");
//    await next();
//});


app.UseMiddleware<AntiforgeryMiddleware>();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

var staticFileOptions = new StaticFileOptions
{
    OnPrepareResponse = context =>
    {
        context.Context.Response.Headers.Add("Content-Security-Policy",
            "default-src 'self';");
    }
};
app.MapFallbackToFile("index.html", staticFileOptions);

//app.MapFallbackToFile("index.html");

app.Run();
