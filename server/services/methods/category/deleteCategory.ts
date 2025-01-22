import { readBody } from '#imports';
import prisma from '../../../../prisma/prisma';
import supabase from '../../../../utils/supabase'


const deleteCategory = async (event: any) => {
    try{

        const body = await readBody(event);

        if (!body.id) {
            throw new Error('category Id is required')
        }

        await prisma.category.delete({
            where: {id: body.id}
        })

        return {
            message: `Category with ${body.name} deleted successfully`,
            name: body.name
        }

    } catch (error) {
        if (error) {
            return { error: error || 'Failed to delete category' };

        }
    }
}

export default deleteCategory
