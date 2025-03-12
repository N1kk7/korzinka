import jwt from "jsonwebtoken";
import prisma from "../../../../prisma/prisma";
import { getCookie, setCookie } from "#imports";

const JWT_SECRET = process.env.JWT_SECRET as string;

async function me(event: any) {
  let accessToken = getCookie(event, "accessToken");
  const refreshToken = getCookie(event, "refreshToken");

  if (!accessToken && refreshToken) {
    try {
      const decoded = jwt.verify(refreshToken, JWT_SECRET) as { id: number };
      accessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      setCookie(event, "accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 3600,
      });
    } catch (error) {
      console.log(error, "error access token");
      console.error("Refresh token invalid:", error);
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid refresh token",
      });
    }
  }
  if (!accessToken) {
    console.error("No valid tokens found");
    throw createError({ statusCode: 401, statusMessage: "Auth is required" });
  }
  try {
    console.log("Verifying access token");
    const decoded = jwt.verify(accessToken, JWT_SECRET) as { id: number };

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      console.error("User not found");
      throw createError({ statusCode: 401, statusMessage: "User not found" });
    }

    console.log("User found:", user);
    return { user: user };
  } catch (error) {
    console.error("Access token invalid:", error);
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid access token",
    });
  }
}

export default me;
