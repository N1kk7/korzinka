
// import prisma from '../../../../prisma/prisma';
// import redisClient from "../../../../utils/redisClient"


// async function getProducts() {

//     const cacheKey = 'all_products'


//     try{
//         console.time('⏳ Redis Get Time');
//         const cacheData = await redisClient.get(cacheKey);
//         console.timeEnd('⏳ Redis Get Time');
//         if (cacheData) {
//             console.log('data downloaded from cache');

//             return {
//                 data: JSON.parse(cacheData),
//                 message: 'Data loaded from cache'
//             }
//         }

//         const products = await prisma.product.findMany({
//             include: {
//                 img: true, 
//                 options: {
//                     include: {
//                         translations: true, 
//                     }
//                 },
//                 translations: true, 
//                 category: true
//             }
//         })

//         await redisClient.set(cacheKey, JSON.stringify(products), {EX: 3600})

//         console.log('data added to cache')


//         return {
//             data: products,
//             message: 'Getting data was successfully'
//         }


        

//     } catch (error) {
//         return {
//             message: 'Something went wrong',
//             error: error
//         }
//     }

// }

// export default getProducts

import prisma from '../../../../prisma/prisma';
import redisClient from "../../../../utils/redisClient";

// async function getProducts(event: any) {

//     const page = 1; 

//     const pageSize = 10; 

//     const cacheKey = `all_products_page_${page}`;

    // products?page=1&pageSize=10

    // try {
        // console.time('⏳ Redis Get Time');
        // const cacheData = await redisClient.get(cacheKey);
        // console.timeEnd('⏳ Redis Get Time');

        // if (cacheData) {
        //     console.log('Data loaded from cache');
        //     return {
        //         data: JSON.parse(cacheData),
        //         message: 'Data loaded from cache'
        //     };
        // }

        // Запрос в базу данных с пагинацией
        // const products = await prisma.product.findMany({
        //     skip: 10 + pageSize,  // Пропуск товаров на предыдущих страницах
        //     take: pageSize,  // Количество товаров на текущей странице
        //     include: {
        //         img: true, 
        //         options: {
        //             include: {
        //                 translations: true, 
        //             }
        //         },
        //         translations: true, 
        //         category: true
        //     }
        // });

        // const products = await prisma.product.findMany({
        //     skip: (page - 1) * pageSize,  // Пропускаем товары на предыдущих страницах
        //     take: pageSize,  // Количество товаров на текущей странице
        //     include: {
        //         img: true, 
        //         options: {
        //             include: {
        //                 translations: true, 
        //             }
        //         },
        //         translations: true, 
        //         category: true
        //     }
        // });
        

        // Кэшируем данные для текущей страницы в Redis
        // await redisClient.set(cacheKey, JSON.stringify(products), { EX: 3600 });

        // console.log('Data added to cache');

//         return {
//             data: products,
//             message: 'Getting data was successful'
//         };

//     } catch (error) {
//         return {
//             message: 'Something went wrong',
//             error: error
//         };
//     }
// }

// export default getProducts;




async function getProducts(event: any) {

    console.log('getProducts')


    const page = 1;  
    const pageSize = 10; 

    const cacheKey = `all_products_page_${page}_size_${pageSize}`;

    try {
        const cacheData = await redisClient.get(cacheKey);
        if (cacheData) {
            console.log('Data loaded from cache');
            return {
                data: JSON.parse(cacheData),
                message: 'Data loaded from cache'
            };
        }

        const products = await prisma.product.findMany({
            skip: (page - 1) * pageSize, 
            take: pageSize,  
            include: {
                img: true, 
                options: {
                    include: {
                        translations: true, 
                    }
                },
                translations: true, 
                category: true
            }
        });

        await redisClient.set(cacheKey, JSON.stringify(products), "EX", 3600);

        console.log('Data added to cache');

        return {
            data: products,
            message: 'Getting data was successful'
        };

    } catch (error) {
        return {
            message: 'Something went wrong',
            error: error
        };
    }
}

export default getProducts;

