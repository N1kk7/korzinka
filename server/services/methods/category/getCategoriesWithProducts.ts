import prisma from "../../../../prisma/prisma";


const getCategoriesWithProducts = async () => {

    
        return await prisma.category.findMany({
            where: {
                products: {
                    some: {},
                },
            },
            include: {
                products: {
                    include: {
                        img: true,
                        options: {
                            include: {
                                translations: true,
                            }
                        },
                        translations: true
                    }
                },
                translations: true,
            },
        })
}

export default getCategoriesWithProducts;