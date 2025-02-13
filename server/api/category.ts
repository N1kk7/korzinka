import { defineEventHandler } from "#imports";
import  {
    addCategory, 
    addSubCategory, 
    getAllCategories, 
    getCategoriesWithProducts,
    getCategoryWithProducts,
    deleteCategory
}  from '../services/categoryServices'

export default defineEventHandler(async (event) => {

    const method = event.node.req.method;

    const query = getQuery(event);

    console.log(query, 'query');
    
 
    switch (method) {
        case 'GET': 
            if (query.category === 'all') {
                return await getCategoriesWithProducts();
            } else if (query.id) {
                return await getCategoryWithProducts(Number(query.id));
            } else {
                return await getAllCategories();
            }
        break;
        case 'POST':
            return await addCategory(event);
        // return await addUser();
        break;
        case 'PATCH':
            // return await updateUser();
        break;
        case 'DELETE':
            return await deleteCategory(event)
            // return await deleteUser();
        break;
        default: 
        return { message: "Method not defined"}
    }
});