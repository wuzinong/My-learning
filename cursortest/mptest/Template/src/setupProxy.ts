import { apiUrl } from "./config/config";

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app: any) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: apiUrl,
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};
