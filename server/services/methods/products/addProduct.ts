import { readMultipartFormData } from "#imports";
import prisma from '../../../../prisma/prisma';
import supabase from '../../../../utils/supabase'


async function addProduct(event: any) {
    try{

        const files = await readMultipartFormData(event);

        if (!files || files.length === 0) {
            return { message: 'No files uploaded!' };
        }
        const textFields: Record<string, string> = {};
        const uploadedFiles = [];

        for (const item of files) {
            return {response: item}

            // if (item.type) {
            //     // uploadedFiles.push(item);

            // }
            //  else if (item.name) {
            //     textFields[item.name] = item.data.toString();
            // } else {
            //     console.log('Item without a name:', item);
            // }
        }

        // const getFiles = uploadedFiles[0]





    } catch (error) {

    }

}

export default addProduct