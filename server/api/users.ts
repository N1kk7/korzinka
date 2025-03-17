import { defineEventHandler } from "#imports";
import { updateUser } from "../services/userServices";


export default defineEventHandler(async (event) => {

    const method = event.node.req.method;

    const query = getQuery(event);

    switch (method) {
        case 'GET': 
           
        break;
        case 'POST':
           

        // return await addUser();
        break;
        case 'PATCH':
            return await updateUser(event);
        break;
        case 'DELETE':
            // return await deleteUser();
        break;
        default: 
        return { message: "Method not defined"}
    }
});