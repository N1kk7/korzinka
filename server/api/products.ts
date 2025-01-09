import { defineEventHandler } from "#imports";
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
            error: error,
            message: "Something went wrong"
        }
    }
});