# Taskify for Blazor

Taskify for Blazor includes three main projects.

1. A Blazor server application, that is it's an application hosted solely on the server but reuses the Blazor client pages (that are part of the WebAssembly project).
2. A Blazor WebAssembly project which will generate a WASM client application.
3. A ASP.NET hosting application for Blazor WebAssembly, which can be used to deploy the WASM client on IIS or supply functionality for the client application.

