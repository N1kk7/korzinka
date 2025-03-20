// server/api/redis-test.js
import redisClient from '../../utils/redisClient';

export default defineEventHandler(async (event) => {
  console.log('Проверка подключения к Redis');

  try {
    // Пингование Redis
    const pingResponse = await redisClient.ping();
    return {
      message: 'Соединение с Redis установлено',
      pingResponse: pingResponse,  // Ожидается 'PONG'
    };
  } catch (err) {
    return {
      message: 'Ошибка при подключении к Redis',
      error: err,
    };
  }
});
