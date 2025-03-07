import { readMultipartFormData } from "#imports";
import prisma from '../../../../prisma/prisma';
import { sendTelegramMessage } from "~/utils/sendTgMessage";



async function createOrder(event: any) {
    try{

        const formData = await readMultipartFormData(event);

        if (!formData) {
            return { message: 'No data received!' };
        }

        const parsedData = formData.map((item) => JSON.parse(item.data.toString()));


        // return {
        //     data: parsedData
        // }

        const uploadNewOrder = await prisma.user.create({
            data: {
                username: parsedData[0].username,
                email: parsedData[0].email,
                password: parsedData[0].password,
                orders: {
                    create: parsedData[0].orders.map((order: any) => ({
                      totalPrice: order.totalPrice,
                      status: order.status || 'PENDING',
                      shippingInfo: {
                        create: order.shippingInfo
                      },
                      orderItems: {
                        create: order.orderItems.map((item: any) => ({
                          productId: item.productId,
                          quantity: item.quantity
                        }))
                      }
                    }))
                  }
            }
        })

        const order = await prisma.order.findFirst(parsedData[0])

        if (!order) {
          return null
        }

        const admins = await prisma.telegramUser.findMany({ where: { role: 'ADMIN' } });

        for (const admin of admins) {
          await sendTelegramMessage(admin.chatId, `📢 Новый заказ №${order.id}\n👤 Клиент: ${order.status}\n💰 Сумма: ${order.totalPrice}₽`);
        }

        return {
            status: 'success',
            data: uploadNewOrder
        }

    } catch (err) {
        return  `Something went wrong ${err}`
        
    }
}

export default createOrder