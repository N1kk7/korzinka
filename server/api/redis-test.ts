// server/api/redis-test.js
import redisClient from '../../utils/redisClient';

export default defineEventHandler(async (event) => {

  try {
    const pingResponse = await redisClient.ping();
    return {
      message: 'Соединение с Redis установлено',
      pingResponse: pingResponse, 
    };
  } catch (err) {
    return {
      message: 'Ошибка при подключении к Redis',
      error: err,
    };
  }
});
