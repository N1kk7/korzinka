import prisma from "../../../../prisma/prisma";
import supabase from "../../../../utils/supabase";


async function getAllCategories (){
    try{
        const categories = await prisma.category.findMany({
            include: {
                subcategories: true,
                translations: true,
                products: true, 
            },
        });

        return {data: categories}
        

    } catch (error) {
        return {message: error}
    }


}

export default getAllCategories;