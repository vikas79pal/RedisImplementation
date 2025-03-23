const Redis = require('ioredis');
module.exports.setupPubSub = (app) => {
    const pub = new Redis();
    const sub = new Redis();

    sub.subscribe('notifications', (err, count) => {
        if (err) console.error('Subscription error:', err);
    });

    sub.on('message', (channel, message) => {
        console.log(`Received message: ${message} on channel: ${channel}`);
    });

    app.get('/publish', async (req, res) => {
        await pub.publish('notifications', 'Hello Subscribers!');
        res.send('Message published!');
    });
};
