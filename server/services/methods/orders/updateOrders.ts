import { defineEventHandler, readBody } from '#imports';
import prisma from '../../../../prisma/prisma';

// import { sendTelegramMessage } from '@/utils/sendTgMessage';
import { sendTelegramMessage } from '../../../../utils/sendTgMessage';



export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { orderId, status } = body;

  const order = await prisma.order.update({
    where: { id: orderId },
    data: { status }
  });

  const client = await prisma.user.findUnique({ where: { id: orderId } });

  if (client) {
    await sendTelegramMessage(orderId, `📦 Ваш заказ №${orderId} обновлён. Новый статус: ${status}`);
  }

  return { success: true, order };
});
