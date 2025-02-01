import { readMultipartFormData } from "#imports";
import prisma from '../../../../prisma/prisma';
import supabase from '../../../../utils/supabase'


async function getProducts() {
    try{
        const products = await prisma.product.findMany({
            include: {
                img: true, 
                options: {
                    include: {
                        translations: true, 
                    }
                },
                translations: true, 
                category: true
            }
        })

        return {
            data: products,
            message: 'Getting data was successfully'
        }


        

    } catch (error) {
        return {
            message: 'Something went wrong',
            error: error
        }
    }

}

export default getProducts