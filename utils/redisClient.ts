// import Redis from 'ioredis'
const config = useRuntimeConfig();
// const redis = new Redis({
//     host: 'redis-16604.c281.us-east-1-2.ec2.redns.redis-cloud.com:16604', 
//     port: 16604,                     
//     password: '2xJi0DDpaSTbmnNzIh1p2m4z9aQAv0bW', 
//     db: 0                           
//   });


//   // Проверка соединения с Redis
// redis.on('connect', () => {
//     console.log('Redis connected');
//   });
  
//   redis.on('error', (err) => {
//     console.error('Redis connection error:', err);
//   });
  
//   // Экспортируем клиент Redis
//  export default redis;



//  import {createClient}  from 'redis';

//  const client = createClient({
//     username: 'default',
//     password: '2xJi0DDpaSTbmnNzIh1p2m4z9aQAv0bW',
//     socket: {
//         host: 'redis-16604.c281.us-east-1-2.ec2.redns.redis-cloud.com',
//         port: 16604
//     }
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

// export default client

// utils/redisClient.js


// import { createClient } from 'redis';

// const redisClient = createClient({
//   username: 'default',
//   password: '2xJi0DDpaSTbmnNzIh1p2m4z9aQAv0bW',
//   socket: {
//     host: 'redis-16604.c281.us-east-1-2.ec2.redns.redis-cloud.com',
//     port: 16604,
//   },
// });

// redisClient.on('error', (err) => console.error('Redis Client Error', err));

// await redisClient.connect(); 

// // console.log('✅ Connected to Redis');

// export default redisClient;

import { createClient } from 'redis';

const redisClient = createClient({
  username: 'default',
//   password: '2xJi0DDpaSTbmnNzIh1p2m4z9aQAv0bW',
//   socket: {
//     host: 'redis-16604.c281.us-east-1-2.ec2.redns.redis-cloud.com',
//     port: 16604,
//   },
    // password: 'WSa8Av0vC1OvKnC2e6OLtIvj8Xkl2fXD',
    // socket: {
    //     host: 'redis-18374.c233.eu-west-1-1.ec2.redns.redis-cloud.com',
    //     port: 18374
    // }
    password: `${config.redisPass}`,
    socket: {
        host: config.redisUri,
        port: 12405
    }
});

// redisClient.on('error', (err) => console.error('Redis Client Error', err));

// if (!redisClient.isOpen) {
//   redisClient.connect()
//     .then(() => console.log('Подключение к Redis установлено'))
//     .catch((err) => console.error('Ошибка подключения к Redis:', err));
// }


redisClient.on('error', (err) => console.error('❌ Redis Client Error:', err));

redisClient.on('connect', () => console.log('✅ Подключение к Redis установлено'));

if (!redisClient.isReady) {
  redisClient.connect()
    .catch((err) => console.error('❌ Ошибка подключения к Redis:', err));
}


export default redisClient;


