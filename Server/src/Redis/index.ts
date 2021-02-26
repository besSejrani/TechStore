import Redis from "ioredis";
export const redis = new Redis(process.env.REDIS_URL, {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
});
