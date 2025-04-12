
import prisma from '../../../../prisma/prisma';


async function getUsers() {
    try{

        const users = await prisma.user.findMany({
            where: {
                role: 'CLIENT'
            },
            // select: {
            //     id: true,
            //     username: true,
            //     userSurname: true,
            //     phoneNumber: true,
            //     email: true,
            //     userAvatar: true,
            //     userFamily: true,


            // }
        })

        const safeUsers = users.map(({ password, ...rest  }) => rest)

        return {
            status: '200',
            data: safeUsers,
            message: 'Success'
        }

    } catch (e) {

        return {
            message: 'Error'
        }

    }
}

export default getUsers