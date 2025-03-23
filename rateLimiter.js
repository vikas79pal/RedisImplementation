const rateLimit = require('express-rate-limit');
module.exports.setupRateLimiter = (app, redisClient) => {
    const limiter = rateLimit({
        windowMs: 60 * 1000,
        max: 5,
        keyGenerator: (req) => req.ip,
        handler: (req, res) => res.status(429).send('Too many requests!'),
        store: new (require('rate-limit-redis'))({ client: redisClient })
    });

    app.get('/protected', limiter, (req, res) => {
        res.send('You are within the rate limit!');
    });
};
