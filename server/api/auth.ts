import { defineEventHandler } from "#imports";



export default defineEventHandler(async (event) => {

    const method = event.node.req.method;
    const query = getQuery(event);

    switch (method) {
        case "GET":
        break;
        case "POST":
        break;
        case "PATCH":
        break;
        case "DELETE":
        break;
        default:
            return { message: "Method not defined" }
    }

})