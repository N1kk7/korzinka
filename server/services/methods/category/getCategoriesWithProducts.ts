import prisma from "../../../../prisma/prisma";

import { encode, decode } from "@msgpack/msgpack";
import redisClient from "../../../../utils/redisClient";

const getCategoriesWithProducts = async (offset: any) => {
    const cacheKey = `categories_ofset_${offset}`;

    console.log(offset, 'offset from sever')

    try {
        const pipeline = redisClient.pipeline();
        pipeline.getBuffer(cacheKey);
        const execResult = await pipeline.exec();
        let hasMore;

        if (!execResult) return { message: 'Redis error', error: 'Pipeline returned null' };

        const [[error, cacheData]] = execResult;
        const totalProducts = await prisma.product.count();

        console.log(totalProducts, 'totalProducts')

        if (error) return { message: 'Redis error', error };

        if (cacheData) {

            const loadedData = JSON.parse(cacheData.toString());

            // hasMore = offset + 10 < totalProducts
            const hasMore = loadedData.some((category: any) => category.products.length === 10);

            return { data: loadedData, message: 'Data loaded from cache', hasMore };
        }

        const categoryWithProducts = await prisma.category.findMany({
            where: {
                products: {some: {}}
            },
            select: {
                id: true,
                group: true, 
                translations: { select: { language: true, title: true } },
                products: {
                    take: 10,
                    skip: +offset,
                    select: {
                        id: true,
                        productSize: true, 
                        img: { select: { path: true } },
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
                                translations: { select: { language: true, optionInfo: true } }
                            }
                        }
                    },
                }
            }
        });


        // console.log(totalProducts, 'totalProducts from server')

        // console.log(offset + categoryWithProducts.length < totalProducts, 'offset state')

        await redisClient.set(cacheKey, JSON.stringify(categoryWithProducts), "EX", 3600);

        return { 
            data: categoryWithProducts,
            message: 'Data added to cache',
            hasMore: categoryWithProducts.some(category => category.products.length === 10)
        };
    } catch (error) {
        return { message: 'Something went wrong', error };
    }
};

export default getCategoriesWithProducts;
