import { defineEventHandler, readBody, readMultipartFormData } from "#imports";
import { error } from "@splidejs/splide/src/js/utils";
// import prisma from "../../prisma/prisma";
import prisma from "../../prisma/prisma";
import supabase from "../../utils/supabase";

// console.log('products log');

export default defineEventHandler(async (event) => {

    const method = event.node.req.method;
    // return{
    //     success: true,
    //     data: 
    //         [
    //             { id: 1, name: 'Vasiliy', age: 22, dateOfBirth: '22.02.1990' },
    //             { id: 2, name: 'Anna', age: 25, dateOfBirth: '15.07.1998' },
    //         ]
        
    // }
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

    switch (method) {
        case 'GET': 
        break;
        case 'POST':


            try {

                const files = await readMultipartFormData(event);


                if (!files || files.length === 0) {
                    return { message: 'No files uploaded!' };
                }

                const textFields: Record<string, string> = {};
                const uploadedFiles = [];

            
                for (const item of files) {
                    if (item.type) {
                        uploadedFiles.push(item);
                    } else if (item.name) {
                        textFields[item.name] = item.data.toString();
                    } else {
                        console.log('Item without a name:', item);
                    }
                }

                const title = textFields.title;
                const group = textFields.group;
                const visible = textFields.visible === 'true';
    
                const getFiles = uploadedFiles[0];

                const file = {
                    name: getFiles.name,
                    type: getFiles.type,
                    data: getFiles.data
                }
                // console.log(file.name, file.type, file.data);

                const fileBuffer = new Uint8Array(file.data); 
                const blob = new Blob([fileBuffer], { type: file.type });
                // const fileBuffer = await file.data.arrayBuffer(); 

                // const blob = await fileBuffer.blob()


                // return { message: file}

                const fileName = file.name;
                // const fileType = file
                // const fileData = file;   

                const bucketName = 'Images';
                const categoryFolder = 'categoryImg';
                const storagePath = `${categoryFolder}/${fileName}`

                // return { message: blob}

                const {data, error} = await supabase.storage
                    .from(bucketName)
                    .upload(storagePath, blob, {
                        contentType: file.type,
                        upsert: true
                    })

                if (error) {
                    // throw new Error('Failed to upload file');
                    return {message: error.message}
                }

                const { data: publicUrlData } = supabase.storage
                    .from(bucketName)
                    .getPublicUrl(storagePath);

                const publicUrl = publicUrlData.publicUrl;

                const newCategory = await prisma.category.create({
                    data: {
                        group,
                        title,
                        visible: visible, // По умолчанию true
                        categoryImg: publicUrl
                    }
                })


                return {

                    message: 'Category created successfully',
                    category: newCategory,
                    imageUrl: publicUrl,
                }












            } catch (error) {
                return {
                    message: `Something went wrong, ${error}`
                }


            }


            

        // return await addUser();
        break;
        case 'PATCH':
            // return await updateUser();
        break;
        case 'DELETE':
            // return await deleteUser();
        break;
        default: 
        return { message: "Method not defined"}

    }
});