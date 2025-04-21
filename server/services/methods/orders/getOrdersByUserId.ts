import prisma from '../../../../prisma/prisma';



async function getOrdersByUserId(id: number) {

    try {

        const ordersByUserId = await prisma.order.findMany({
            where: {
                userId: id
            }
        })


        return {
            status: 'ok',
            data: ordersByUserId
        }
 
    } catch (err) {

        console.error(err)
        return {
            statusCode: 400,
            message: `Something went wrong ${err}`
        }

    }

}


export default getOrdersByUserId;

