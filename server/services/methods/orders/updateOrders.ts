import { defineEventHandler, readBody } from '#imports';
import prisma from '../../../../prisma/prisma';

import { sendTelegramMessage } from '@/utils/sendTgMessage';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { orderId, status } = body;

  const order = await prisma.order.update({
    where: { id: orderId },
    data: { status }
  });

  const client = await prisma.telegramUser.findUnique({ where: { chatId: order.id } });

  if (client) {
    await sendTelegramMessage(client.chatId, `📦 Ваш заказ №${orderId} обновлён. Новый статус: ${status}`);
  }

  return { success: true, order };
});
