import jwt from "jsonwebtoken";
import { useRuntimeConfig, setCookie, getCookie } from "#imports";

async function refreshToken(event: any) {

    const config = useRuntimeConfig();
    const refreshToken = getCookie(event, 'refreshToken');

    if (!refreshToken) {
        throw createError({ statusCode: 401, statusMessage: 'Auth is required' });
    }

    try{
        const decoded = jwt.verify(refreshToken, config.jwtSecret) as { id: number};
        const newAccessToken = jwt.sign({ id: decoded.id }, config.jwtSecret, { expiresIn: '1h' });

        setCookie(event, 'accessToken', newAccessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 3600,
        });

        return {
            statusCode: 200,
            statusMessage: 'Refresh token successful',
        }
    } catch {
        throw createError({ statusCode: 401, statusMessage: 'The token is invalid' });
    }

}

export default refreshToken;