import { readMultipartFormData } from "#imports";
import prisma from '../../../../prisma/prisma';
import supabase from '../../../../utils/supabase'

async function addCategory(event: any) {
    try {

        const files = await readMultipartFormData(event);


        if (!files || files.length === 0) {
            return { message: 'No files uploaded!' };
        }

        const textFields: Record<string, string> = {};
        const uploadedFiles = [];

        const date = new Date();

    
        for (const item of files) {
            console.log(item.type, 'category item')
            if (item.type) {
                console.log(item, 'item')
                uploadedFiles.push(item);
            } else if (item.name) {
                textFields[item.name] = item.data.toString();
            } else {
                console.log('Item without a name:', item);
            }
        }

        const titleUk = textFields.titleUk;
        const titleEn = textFields.titleEn;
        const titleRu = textFields.titleRu;
        const group = textFields.group;
        const visible = textFields.visible === 'true';

        const getFiles = uploadedFiles[0];

        const file = {
            name: getFiles.name,
            type: getFiles.type,
            data: getFiles.data
        }
        // console.log(file.name, file.type, file.data);

        const fileBuffer = new Uint8Array(file.data); 
        const blob = new Blob([fileBuffer], { type: file.type });
        // const fileBuffer = await file.data.arrayBuffer(); 

        // const blob = await fileBuffer.blob()


        return { message: blob}

        const fileName = file.name;
        // const fileType = file
        // const fileData = file;   

        const bucketName = 'Images';
        const categoryFolder = 'categoryImg';
        const storagePath = `${categoryFolder}/${date.getTime()}${fileName}`

        // return { message: titleEn, titleRu, titleUk}

        const {data, error} = await supabase.storage
            .from(bucketName)
            .upload(storagePath, blob, {
                contentType: file.type,
                upsert: true
            })

        if (error) {
            // throw new Error('Failed to upload file');
            // return {message: error.message}//////////////
        }

        const { data: publicUrlData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(storagePath);

        const publicUrl = publicUrlData.publicUrl;

        const newCategory = await prisma.category.create({
            data: {
                group,
                visible: visible, // По умолчанию true
                translations: {
                    create: [
                        {
                            language: 'uk',
                            title: titleUk
                        },
                        {
                            language: 'en',
                            title: titleEn,
                        },
                        {
                            language: 'ru',
                            title: titleRu
                        }
                    ]
                },
                categoryImg: publicUrl
            }
        })


        return {
            tooltipStatus: 'success',
            message: 'Категорія створена успішно',
            category: newCategory,
            imageUrl: publicUrl,
        }

    } catch (error) {
        return {
            message: `Something went wrong, ${error}`
        }


    }

}

export default addCategory;
