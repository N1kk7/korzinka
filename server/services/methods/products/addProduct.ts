import { readMultipartFormData } from "#imports";
import prisma from '../../../../prisma/prisma';
import supabase from '../../../../utils/supabase'


async function addProduct(event: any) {
    try{

        // console.log('ololo')

        const formData = await readMultipartFormData(event);

        if (!formData) {
            return { message: 'No data received!' };
        }

        // let jsonData = {}
        // const textFields: Record<string, string> = {};
        // const uploadedFiles = [];
        // files.forEach(file => {
        //     if (file.name === 'data') {
        //         jsonData = JSON.parse(file.data.toString());
        //     } else {
        //         // uploadedFiles.push(file);
        //         return {
        //             message: 'Server get unknown data'
        //         }
        //     }
        // });

        const textField = formData.find((field) => field.name === 'data');

        if (!textField) {
            return {message: 'No product data found'}
        }

        const productData = JSON.parse(textField.data.toString());

        // console.log(productData)

        const newProduct = await prisma.product.create({
            data: {
                categoryId: Number(productData.category),
                visible: Boolean(productData.visibility),
                price: Number(productData.price),
                stockState: Boolean(productData.stockState),
                stockValue: Number(productData.stockValue),
                discountPercent: Number(productData.discountPersent),
                wholesalePrice: Number(productData.wholesalePrice),
                counterQuantity: Number(productData.counterQuantity),
                packageType: String(productData.packageType),
                wholesaleOnly: Boolean(productData.wholesaleOnly),

                translations: {
                    
                    create: productData.translations.map((t: any) => ({
                        language: t.language,
                        title: t.title,
                        productDescription: t.description,
                        wholesaleDescription: t.wholesaleDescription,

                    })),

                },

                img: {
                    create: productData.img.map((imgPath: string) => ({
                        path: ''
                    }))
                },

                options: {

                    create: productData.options.map((option: any) => ({
                        optionImg: '',
                        // optionDescription: 'test string',
                        optionPrice: Number(option.optionPrice),
                        // optionWholesale: Number(option.optionWholesale),
                        // wholesaleOnly: true,

                        translations: {
                            create: option.translations.map((tr: any) => ({
                                language: tr.language,
                                optionInfo: tr.optionInfo,
                            })),
                        }
                    }))
                }

            }
        })

        console.log(newProduct, 'log product')

        return {
            // data: jsonData
            message: 'Product created successfully',
            product: newProduct,
        }

        // for (const item of files) {

            // console.log(item, 'item api')
        //     return {response: item}

            // if (item.type) {
            //     // uploadedFiles.push(item);

            // }
            //  else if (item.name) {
            //     textFields[item.name] = item.data.toString();
            // } else {
            //     console.log('Item without a name:', item);
            // }
        // }

        // const getFiles = uploadedFiles[0]





    } catch (error) {
        return {
            message: `${error} something went wrong` 
        }
    }

}

export default addProduct