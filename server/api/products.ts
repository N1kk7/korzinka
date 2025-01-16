import { defineEventHandler, readBody, readMultipartFormData } from "#imports";
// import prisma from "../../prisma/prisma";
import prisma from "../../prisma/prisma";

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
            const body = await readBody(event);
            const files = await readMultipartFormData(event);

            console.log(files, 'from server')

            if (!files || files.length === 0) {
                // Если файлы отсутствуют, возвращаем сообщение об ошибке
                return { message: 'No files uploaded!' };
              }

            const file = files[0]

            const fileName = file.filename;
            const fileType = file.type
            const fileData = file.data;

            return {message: 'data written successfully from post', files, fileName, fileType, fileData}

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