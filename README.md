# 🚀 Redis + Node.js Demo

## 📜 What’s This Project About?

This project is a hands-on **Redis-powered Node.js application** that goes beyond just caching! It showcases how to:

1️⃣ **Use Redis as a Database** – Store and retrieve key-value pairs with automatic expiration.
2️⃣ **Implement Pub/Sub Messaging** – Enable real-time communication between services.
3️⃣ **Set Up Rate Limiting** – Protect APIs from abuse using Redis.

If you're looking to **build fast, scalable, and efficient apps**, this project is for you! 🚀

---

## 🛠 How to Get Started

### Prerequisites
Before you begin, make sure you have:
- **Node.js** installed
- **Redis** running locally or via a cloud provider

### Installation Steps:
```sh
# Clone the project
git clone <repo-url>
cd redis-node-demo

# Install dependencies
npm install

# Start the server
node server.js
```

---

## 🔥 What Can You Do with This?

| Endpoint         | Method | What It Does |
|-----------------|--------|-------------|
| `/store`        | GET    | Saves a message in Redis (expires in 60s) |
| `/retrieve`     | GET    | Fetches the stored message from Redis |
| `/publish`      | GET    | Publishes a message using Redis Pub/Sub |
| `/protected`    | GET    | A rate-limited API (5 requests per minute) |

---

## 📂 Project Breakdown

This project is structured neatly for easy understanding:
```
redis-node-demo/
│-- server.js          # Main app setup
│-- database.js        # Redis-powered database logic
│-- pubsub.js          # Real-time Pub/Sub functionality
│-- ratelimiter.js     # Rate limiting using Redis
│-- package.json       # Dependencies & scripts
```

---

## 🔧 Useful Redis Commands

Here are some handy Redis commands to debug and test:
```sh
# Check if Redis is running
redis-cli ping

# Manually publish a message to subscribers
redis-cli publish notifications "Hello from Redis!"
```

---

## 📝 Things to Know
- The **rate limiter** restricts each IP to **5 requests per minute** on `/protected`.
- The **stored message in Redis automatically expires** after **60 seconds**.
- **Pub/Sub works in real time**, making it great for notifications and event-driven systems!
