const PROXY_CONFIG = {
  "/api": {
    "target": process.env.MUSCLE_API_URL || "http://app:5000",
    "secure": false,
    "pathRewrite": {
      "^/api": ""
    },
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;
