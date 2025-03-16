import { readMultipartFormData } from "#imports";
import prisma from '../../../../prisma/prisma';



async function updateUser(event: any) {


    try{

        const body = await readMultipartFormData(event);

        if (!body) {
            return {
                status: 404,
                message: 'No data received'
            }
        }

        const {userId, field} = JSON.parse(body[0].data.toString())

        // const fetchUpdate = await prisma.user.update({
        //     where: {id: userId}
        // })

    } catch (err) {
        return {
            message: `Uploading wrong ${err}`
        }
    }


}