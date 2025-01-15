import { defineEventHandler } from "#imports";
// import prisma from "../../prisma/prisma";
import prisma from "../../prisma/prisma";

console.log('products log');

export default defineEventHandler(async (event) => {
    return{
        success: true,
        data: 
            [
                { id: 1, name: 'Vasiliy', age: 22, dateOfBirth: '22.02.1990' },
                { id: 2, name: 'Anna', age: 25, dateOfBirth: '15.07.1998' },
            ]
        
    }
    // try{
    //     const products = await prisma.category.findMany({
    //         include: {
    //             products: true,
    //         },
    //     });

    //     // console.log(products)
       
    //     return {
    //         success: true,
    //         data: products,

    //     }
    // } catch (error) {
    //     return {
    //         success: false,
    //         // error: error,
    //         error: true,
    //         message: `Something went wrong, ${error}`
    //     }
    // }
    // finally {
    //     await prisma.$disconnect();
    //   }
});