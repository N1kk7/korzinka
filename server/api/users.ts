import { defineEventHandler, readBody } from "#imports";
// import { getAllUsers, getUserById, addUser, updateUser, deleteUser } from "@/server/services/userSrvices";

export default defineEventHandler(async (event) => {

    const method = event.node.req.method;


    // const method = event.node.req.method;
    // const query = getQuery(event);
    // const body = await readBody(event);

    // console.log(query, 'query');
    // console.log(body, 'body')
    // readBody
    // getQuery
    // return{

    //     success: true,
    //     data: 
    //         [
    //             { id: 1, name: 'Vasiliy', age: 22, dateOfBirth: '22.02.1990' },
    //             { id: 2, name: 'Anna', age: 25, dateOfBirth: '15.07.1998' },
    //         ],
    //     event: method
        
    // }
    

    switch (method) {
        case 'GET': 
            // if (query.id) {

            // }
            // return await getAllUsers();
            const users = [
                { id: 1, name: 'Vasiliy', age: 22, dateOfBirth: '22.02.1990' },
                { id: 2, name: 'Anna', age: 25, dateOfBirth: '15.07.1998' },
            ];
            return { message: 'Users fetched successfully', data: users };
        break;
        case 'POST':
            const body = await readBody(event);

            return {message: 'data written successfully from post', data: body}

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