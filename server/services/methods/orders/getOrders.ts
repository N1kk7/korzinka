import prisma from '../../../../prisma/prisma';


async function getOrders() {
    // return await prisma.order.findMany()

    try {

        const orders = await prisma.order.findMany({
            include: {
                shippingInfo: true,
                orderItems: {
                    include: {
                        product: {
                            include: {
                                img: true,
                                options: {
                                    include: {
                                        translations: true,
                                    }
                                },
                                translations: true
                            }
                        }
                    }
                }
            }
        })

        return {
            status: 200,
            data: orders
        }

    } catch (err) {
        return {
            status: 500,
            message: err
        }
    }

}

export default getOrders