import { defineEventHandler } from '#imports';
import { createOrder, getOrders } from '../services/orderServices';

export default defineEventHandler(async (event) => {

    const method = event.node.req.method;

    const query = getQuery(event)

    switch (method) {
        case 'GET': 
            return await getOrders();
       
        break;
        case 'POST':
            return await createOrder(event);
        // return await addUser();
        break;
        case 'PATCH':
            // return await updateUser();
        break;
        case 'DELETE':
            return 
            // return await deleteUser();
        break;
        default: 
    return { message: "Method not defined"}
    }

})