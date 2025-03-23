module.exports.setupDatabaseRoutes = (app, redisClient) => {
    app.get('/store', async (req, res) => {
        await redisClient.set('message', 'Hello, Redis!', 'EX', 60);
        res.send('Stored message in Redis!');
    });

    app.get('/retrieve', async (req, res) => {
        const message = await redisClient.get('message');
        res.send(message ? `Retrieved: ${message}` : 'No message found');
    });
};
