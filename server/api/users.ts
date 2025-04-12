import { defineEventHandler } from "#imports";
import { updateUser, getUsers } from "../services/userServices";


export default defineEventHandler(async (event) => {

    const method = event.node.req.method;

    const query = getQuery(event);

    switch (method) {
        case 'GET': 
            return await getUsers();
           
        break;
        case 'POST':
           
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