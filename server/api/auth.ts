import { defineEventHandler } from "#imports";
import { createUser } from "../services/authServices";



export default defineEventHandler(async (event) => {

    const method = event.node.req.method;
    const query = getQuery(event);

    switch (method) {
        case "GET":
        break;
        case "POST":
            console.log('enter in controller');
            return await createUser(event);
        break;
        case "PATCH":
        break;
        case "DELETE":
        break;
        default:
            return { message: "Method not defined" }
    }

})