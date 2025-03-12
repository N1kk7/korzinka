import { readMultipartFormData } from '#imports'
import prisma from '../../../../prisma/prisma';


async function notificationTg(event: any) {

    console.log('processed notification')

    const body = await readMultipartFormData(event);

    if (!body) {
        return {
            status: 400,
            message: 'No notification data'
        }
    }

    const parsedData = JSON.parse(body[0].data.toString());

    console.log(parsedData, 'parsedData');

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        return {
            status: 400,
            message: 'Some trouble with tg token or chat id'
        }
    }

    const message = 
    `
    🆕 Новый заказ!  
    📦 ID: ${parsedData.orderId}  
    👤 Пользователь: ${parsedData.user}  
    💰 Сумма: ${parsedData.amount}  
    📞 **Телефон:** +380${parsedData.phone}  
    📧 **Email:** ${parsedData.email}  
    📬 **Новая Почта**
    📅 Дата: ${parsedData.date}
    `;
    // const message = `
    // <b>🆕 Новый заказ!</b><br>
    // <b>📦 ID:</b> ${parsedData.id}<br>
    // <b>👤 Пользователь:</b> ${parsedData.user}<br>
    // <b>💰 Сумма:</b> ${parsedData.amount}<br>
    // <b>📞 Телефон:</b> ${parsedData.phone}<br>
    // <b>📧 Email:</b> ${parsedData.email}<br>
    // <b>📬 Новая Почта</b><br>
    // <b>📅 Дата:</b> ${parsedData.date}<br>
    // `;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    try{
        await fetch(telegramUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: message,
              parse_mode: "Markdown",
            }),
          });
        
          return { 
            success: true ,
            message: 'Notification sent'

        };

    } catch (err) {

    }

}


export default notificationTg;
