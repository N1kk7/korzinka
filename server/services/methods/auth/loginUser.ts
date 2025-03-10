import { readMultipartFormData } from "#imports";
import prisma from '../../../../prisma/prisma';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { useRuntimeConfig, setCookie } from "#imports";

const JWT_SECRET = process.env.JWT_SECRET as string;


async function loginUser(event: any) {

    const config = useRuntimeConfig();

    const data = await readMultipartFormData(event);

    if (!data) {
        return { message: 'No data received!' };
    }

    const parsedData = data.map((item) => JSON.parse(item.data.toString()));

    console.log(parsedData, 'parsedData');

    const loginData = parsedData[0];

    const userEmail = loginData.mail;
    const userPassword = loginData.password;

    console.log(userEmail, 'userEmail', userPassword, 'userPassword');

    try{

        const user = await prisma.user.findUnique({
            where: { email: userEmail }
        });

        console.log(user, 'user');

        if (!user || !user.password) {
            throw createError({ statusCode: 400, statusMessage: 'User not found' });
        }

        const isValidPassword = await bcrypt.compare(userPassword, user.password);

        if (!isValidPassword) {
            throw createError({ statusCode: 400, statusMessage: 'Invalid login credentials' });
        }

        const accessToken = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });

        setCookie(event, 'accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 3600,
        });

        setCookie(event, 'refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 3600 * 24 * 7,
        });

        // const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

        // setCookie(event, 'token', token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        //     sameSite: 'strict',
        //     maxAge: 60 * 60 * 24 * 7,
        //     path: '/'

        // });

        return {
            statusCode: 200,
            statusMessage: 'Login successful'
        }

    } catch (err) {
        return {
            statusCode: 400,
            statusMessage: 'User not found', err
        }
    }

}

export default loginUser;