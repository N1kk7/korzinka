import { readMultipartFormData } from "#imports";
import prisma from '../../../../prisma/prisma';


async function createOrder(event: any) {
    try{

        const formData = await readMultipartFormData(event);

        if (!formData) {
            return { message: 'No data received!' };
        }

        const parsedData = formData.map((item) => JSON.parse(item.data.toString()));

        const checkEmail = await prisma.user.findUnique({
            where: {
                email: parsedData[0].email
            }
        })

        if (checkEmail) {

          const addOrder = await prisma.user.update({
            where: {
              email: parsedData[0].email
            },
            data: {
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
            },
            include: {
              orders: {
                orderBy: { createdAt: 'desc' }, 
                take: 1 
              }
            }
          })

          const newOrder = addOrder.orders[0];
          const orderId = newOrder?.id;

          return {
            status: 'success',
            data: orderId
          }
        } else {

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
            },
            include: {
              orders: {
                orderBy: { createdAt: 'desc' }, 
                take: 1 
              }
            }
        })

        const newOrder = uploadNewOrder.orders[0];
        const orderId = newOrder?.id;


          return {
            status: 'success',
            data: orderId
        }

        }


        // return {
        //     data: parsedData
        // }

       

        // const order = await prisma.order.findFirst(parsedData[0])

        // if (!order) {
        //   return null
        // }

        // const admins = await prisma.user.findMany({ where: { role: 'ADMIN' } });

        // for (const admin of admins) {
        //   await sendTelegramMessage(admin.role, `📢 Новый заказ №${order.id}\n👤 Клиент: ${order.status}\n💰 Сумма: ${order.totalPrice}₽`);
        // }

       

    } catch (err) {
        return  `Something went wrong ${err}`
        
    }
}

export default createOrder