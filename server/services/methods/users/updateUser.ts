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

        const {id, field, newValue} = JSON.parse(body[0].data.toString())
        if (!id || !field || newValue === undefined) {
            return {
                status: 400,
                message: 'Invalid request data'
            };
        }


        const fetchUpdate = await prisma.user.update({
            where: { id: id },
            data: {
                [field]: newValue
            }
        })

        return {
            status: '200',
            data: fetchUpdate,
            message: 'User data updated'
        }

    } catch (err) {
        return {
            message: `Uploading wrong ${err}`
        }
    }


}

export default updateUser