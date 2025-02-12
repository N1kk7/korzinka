import prisma from "../../../../prisma/prisma";


const getCategoryWithProducts = async (id: number) => {
    return await prisma.category.findUnique({
        where: {
            id: id
        },
        include: {
            products: true
        }
    })
}



export default getCategoryWithProducts;