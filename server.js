const express = require('express');
const Redis = require('ioredis');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = 3000;
const redisClient = new Redis();
const { setupDatabaseRoutes } = require('./database');
const { setupPubSub } = require('./pubsub');
const { setupRateLimiter } = require('./ratelimiter');

setupDatabaseRoutes(app, redisClient);
setupPubSub(app);
setupRateLimiter(app, redisClient);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

