// import jwt from "jsonwebtoken";
// import prisma from '../../../../prisma/prisma';
// import { useRuntimeConfig, getCookie, setCookie } from "#imports";



// async function me(event: any) {

//     const config = useRuntimeConfig();

//     let accessToken = getCookie(event, 'accessToken');
//     const refreshToken = getCookie(event, 'refreshToken');

//     if (!accessToken && refreshToken) {

//         try{
//             const decoded = jwt.verify(refreshToken, config.jwtSecretKey) as { id: number};
//             accessToken = jwt.sign({ id: decoded.id }, config.jwtSecretKey, { expiresIn: '1h' });

//             setCookie(event, 'accessToken', accessToken, {
//                 httpOnly: true,
//                 secure: true,
//                 sameSite: 'strict',
//                 maxAge: 3600,
//             });
//         } catch {
//             throw createError({ statusCode: 401, statusMessage: 'The token is invalid' });
//         }

//         if (!accessToken) {
//             throw createError({ statusCode: 401, statusMessage: 'Auth is required' });

//         }

//         try {
//             const decoded = jwt.verify(accessToken, config.jwtSecretKey) as { id: number};

//             const user = await prisma.user.findUnique({
//                 where: { id: decoded.id }
//             });

//             if (!user) {
//                 throw createError({ statusCode: 401, statusMessage: 'User not found' });
//             }

//             return {id: user.id, email: user.email, username: user.username}

//         } catch {
//             throw createError({ statusCode: 401, statusMessage: 'The token is invalid' });

//         }




//     }


// }

// export default me;

const JWT_SECRET = process.env.JWT_SECRET as string;


import jwt from "jsonwebtoken";
import prisma from '../../../../prisma/prisma';
import { useRuntimeConfig, getCookie, setCookie } from "#imports";

async function me(event: any) {
    const config = useRuntimeConfig();
    console.log('JWT_Secret:', JWT_SECRET);
    let accessToken = getCookie(event, 'accessToken');
    const refreshToken = getCookie(event, 'refreshToken');

    console.log(accessToken, refreshToken, 'Tokens received'); // Отладка

    if (!accessToken && refreshToken) {
        try {
            console.log('Trying to refresh access token');
            const decoded = jwt.verify(refreshToken, config.jwtSecretKey) as { id: number };

            accessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '1h' });

            setCookie(event, 'accessToken', accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 3600,
            });
        } catch (error) {
            console.error('Refresh token invalid:', error);
            throw createError({ statusCode: 401, statusMessage: 'Invalid refresh token' });
        }
    }

    if (!accessToken) {
        console.error('No valid tokens found');
        throw createError({ statusCode: 401, statusMessage: 'Auth is required' });
    }

    try {
        console.log('Verifying access token');
        const decoded = jwt.verify(accessToken, JWT_SECRET) as { id: number };

        const user = await prisma.user.findUnique({
            where: { id: decoded.id }
        });

        if (!user) {
            console.error('User not found');
            throw createError({ statusCode: 401, statusMessage: 'User not found' });
        }

        console.log('User found:', user);
        return { user: user };

    } catch (error) {
        console.error('Access token invalid:', error);
        throw createError({ statusCode: 401, statusMessage: 'Invalid access token' });
    }
}

export default me;
