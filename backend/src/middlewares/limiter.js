const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { error: 'Too many orders requests . Please try again later.' },
  keyGenerator: (req) => req.ip,
});

module.exports = limiter;