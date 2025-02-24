## To Enable Debug for both FE and BE, proxy needs to be added:

In vite.config.ts: add proxy, e.g:

export default defineConfig({
server: {
port: 3000,
},
build: {
outDir: "../wwwroot", //root folder of asp.net core
},
})

In backend:

1. Adding extension: Microsoft.AspNetCore.SpaServices.Extensions
2. Adding configuration in program.cs (.net 6) or startup.cs(.net core)

builder.Services.AddSpaStaticFiles(config =>
{
// This is where files will be served from in non-Development environments
config.RootPath = "wwwroot";
});
app.UseSpaStaticFiles();
app.UseSpa(builder =>
{
if (app.Environment.IsDevelopment())
{
builder.UseProxyToSpaDevelopmentServer("http://localhost:3000/");
}
});

Make sure your applicationUrl is set correctly under launchSettings.json if you need to integrate with a logged-in only websites which integrates with the veracity SSO
