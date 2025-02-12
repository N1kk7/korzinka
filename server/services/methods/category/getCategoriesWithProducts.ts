import prisma from "../../../../prisma/prisma";


const getCategoriesWithProducts = async () => {
    return await prisma.category.findMany({
        include: {
            products: true
        }
    })
}

export default getCategoriesWithProducts;