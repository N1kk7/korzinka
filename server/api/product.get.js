



export default defineEventHandler(async () => {

    const products = await prisma.product.findMany();

    return products
    // return await prisma.product.findMany({
        
    // })
})