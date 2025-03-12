import { defineEventHandler } from "#imports";
import { notification } from "../services/tgServices";



export default defineEventHandler (async (event) => {


    const method = event.node.req.method;

    const query = getQuery(event);

    console.log(query, 'query');


    switch(method) {
        case 'GET':
            
        break;
        case 'POST':
            if (query.notification = 'newOrder'){
                console.log('enter controller')
                return await notification(event);
            }
            
        break;
        case 'PATCH':
            
        break;
        case 'DELETE':
            
        break;
        default:
            return {
                message: 'method not found'
            }
        break;
    }
})