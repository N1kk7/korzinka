import { defineEventHandler, readBody } from "#imports";
import prisma from '../../../../prisma/prisma';


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { chatId, username, role } = body;


    const existingUser = await prisma.user.findUnique({
        where: { username }
      });


      if (!existingUser) {
        await prisma.user.create({
          data: {  username, role }
        });
        return { success: true, message: `Пользователь ${username} зарегистрирован как ${role}.` };
      } else {
        return { success: false, message: 'Пользователь уже зарегистрирован.' };
      }
})