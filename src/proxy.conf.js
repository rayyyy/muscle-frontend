const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: process.env.MUSCLE_API_URL || "http://app:5000",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
