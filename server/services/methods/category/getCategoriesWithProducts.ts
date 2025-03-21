import prisma from "../../../../prisma/prisma";

import redisClient from "../../../../utils/redisClient";


const getCategoriesWithProducts = async () => {

    const cacheKey = 'all_categories_7';

    try {

        const cacheData = await redisClient.get(cacheKey);

        if (cacheData) {
            console.log('Data loaded from cache');
            return {
                data: JSON.parse(cacheData),
                message: 'Data loaded from cache'
            };
        }
        console.time("DB Query");
        const categoryWithProducts = await prisma.category.findMany({
            // where: {
            //     products: {
            //         some: {},
            //     },
            // },
            // include: {
            //     products: {
            //         include: {
            //             img: true,
            //             options: {
            //                 include: {
            //                     translations: true,
            //                 }
            //             },
            //             translations: true
            //         }
            //     },
            //     translations: true,
            // },
            select: {
                id: true,
                group: true, 
                translations: {
                  select: {
                    language: true,
                    title: true, 
                  }
                },
                products: {
                    take: 10,
                  select: {

                    id: true,
                    productSize: true, 
                    img: {
                      select: {
                        path: true 
                      }
                    },
                    price: true,
                    wholesalePrice: true,
                    counterQuantity: true,
                    translations: {
                      select: {
                        language: true,
                        title: true,
                        productDescription: true,
                        wholesaleDescription: true,
                        groupPackage: true,
                        productColor: true,
                        productMaterial: true

                      }
                    },
                    options: {
                      select: {
                        id: true,
                        translations: {
                          select: {
                            language: true,
                            optionInfo: true 
                          }
                        }
                      }
                    }
                  }
                }
              }
        })
        console.timeEnd("DB Query");

        console.time("Redis Set");
        await redisClient.set(cacheKey, JSON.stringify(categoryWithProducts), "EX", 3600);
        console.timeEnd("Redis Set");

        return {
            data: categoryWithProducts,
            message: 'Data added to cache'
        }
    } catch (error) {

        console.log('something went wrong', error);

        return {
            message: 'Something went wrong',
            error: error
        }
    }
    
        
}

export default getCategoriesWithProducts;