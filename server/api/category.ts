import { defineEventHandler } from "#imports";
import  {addCategory, addSubCategory, getAllCategories}  from '../services/categoryServices'

export default defineEventHandler(async (event) => {

    const method = event.node.req.method;
 
    switch (method) {
        case 'GET': 
            return await getAllCategories();
        break;
        case 'POST':
            return await addCategory(event);
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