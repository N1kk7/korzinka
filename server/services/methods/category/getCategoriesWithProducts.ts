import prisma from "../../../../prisma/prisma";

import { encode, decode } from "@msgpack/msgpack";
import redisClient from "../../../../utils/redisClient";

const getCategoriesWithProducts = async () => {
    const cacheKey = 'all_categories';

    try {
        const pipeline = redisClient.pipeline();
        pipeline.getBuffer(cacheKey);
        const execResult = await pipeline.exec();

        if (!execResult) return { message: 'Redis error', error: 'Pipeline returned null' };

        const [[error, cacheData]] = execResult;

        if (error) return { message: 'Redis error', error };

        if (cacheData) {
            return { data: JSON.parse(cacheData.toString()), message: 'Data loaded from cache' };
        }

        const categoryWithProducts = await prisma.category.findMany({
            select: {
                id: true,
                group: true, 
                translations: { select: { language: true, title: true } },
                products: {
                    take: 10,
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
                    }
                }
            }
        });

        await redisClient.set(cacheKey, JSON.stringify(categoryWithProducts), "EX", 3600);

        return { data: categoryWithProducts, message: 'Data added to cache' };
    } catch (error) {
        return { message: 'Something went wrong', error };
    }
};

export default getCategoriesWithProducts;
