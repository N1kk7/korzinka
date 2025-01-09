import { defineEventHandler } from "#imports";
// import prisma from "../../prisma/prisma";
import prisma from "../../prisma/prisma";


export default defineEventHandler(async (event) => {

    try{
        const products = await prisma.category.findMany({
            include: {
                products: true,
            },
        });

        // console.log(products)
       
        return {
            success: true,
            data: products,

        }
    } catch (error) {
        return {
            success: false,
            // error: error,
            error: true,
            message: `Something went wrong, ${error}`
        }
    }
    finally {
        // Закрываем соединение в случае необходимости
        await prisma.$disconnect();
      }
});