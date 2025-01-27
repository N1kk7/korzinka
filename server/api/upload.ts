import { defineEventHandler } from "#imports";
import { addProductFile, addOptionFile } from "../services/uploadServices";



export default defineEventHandler(async (event) => {

    const method = event.node.req.method;

        switch (method) {
            case 'GET': 
            // return await getAllCategories();
        break;
            case 'POST':
                return addOptionFile(event);
                // return await addCategory(event);
            // return await addUser();
        break;
            case 'PATCH':
            // return await updateUser();
        break;
            case 'DELETE':
            // return await deleteCategory(event)
            // return await deleteUser();
        break;
        default: 
        return { message: "Method not defined"}
    }

})