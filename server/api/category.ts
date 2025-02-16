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

    // console.log(query.category, 'query');
    
 
    switch (method) {
        case 'GET': 
            if (query.category === 'all') {
                return await getCategoriesWithProducts();
            } else if (query.categoryId) {
                // console.log(query.category, 'query.id' );
                return await getCategoryWithProducts(Number(query.categoryId));
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