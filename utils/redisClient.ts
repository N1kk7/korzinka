const config = useRuntimeConfig();

const redisUri = process.env.REDIS_URI;
const redisPass = process.env.REDIS_PASSWORD;

// import { createClient } from 'redis';



// const redisUri = process.env.REDIS_URI;
// const redisPass = process.env.REDIS_PASSWORD;

// // console.log('Redis URI:', redisUri, 'Password:', redisPass);

// const redisClient = createClient({
//   username: 'default',
//     password: redisPass,
//     socket: {
//         host: redisUri,
//         port: 12405
//     }
// });


// redisClient.on('error', (err) => console.error('❌ Redis Client Error:', err));

// redisClient.on('connect', () => console.log('✅ Подключение к Redis установлено'));

// if (!redisClient.isReady) {
//   redisClient.connect()
//     .catch((err) => console.error('❌ Ошибка подключения к Redis:', err));
// }


// export default redisClient;

import Redis from 'ioredis';

const redisClient = new Redis({
  host: redisUri,
  port: 12405,
  username: 'default',
  password: redisPass,
  connectTimeout: 3000,
  retryStrategy: (times) => Math.min(times * 50, 2000),
  tls: {
    rejectUnauthorized: true,
  }

});

export default redisClient;


