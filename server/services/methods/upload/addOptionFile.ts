import { readMultipartFormData } from "#imports";
import supabase from '../../../../utils/supabase'


async function addOptionFile(event: any) {



    try{
        const files = await readMultipartFormData(event);
        

        if (!files || files.length === 0) {
            return {message: 'No files upload'}
        }


        const getFiles = files[0];

        const textFields: Record<string, string> = {};
        const uploadedFiles: any[] = [];

        const date = new Date();
        // for (const item of getFiles.data) {
        //     // return {data: item.data}
        //     if (item.type) {
                
        //     }

            // return {data: item}
            // item.forEach((elem: any) => {
            //     if (elem.type) {
            //         uploadedFiles.push({
            //             // item
            //             name: elem.filename,
            //             type: elem.type,
            //             data: elem.data
            //     });
            //     } else if (elem.name) {
            //         textFields[elem.name] = item.data.toString();
            //     } else {
            //         console.log('Item without a name:', elem);
            //     }
            // })
            
        // }

        return {data: getFiles}

        const groupName = textFields.groupName;

        const urlArr: string[] = [];

        if (uploadedFiles.length === 0) {
            return {message: 'object data is empty'}
        }


        const sendFiles = uploadedFiles.map(async(elem) => {




            // const fileBuffer = new Uint8Array(elem.data);
            const blob = new Blob([elem.data], {type: elem.type});

            const fileName = `${groupName}${date.getTime()}`

            const bucketName = 'Images';
            const categoryFolder = groupName
            const storagePath = `${categoryFolder}/${fileName}`;

            const {data, error} = await supabase.storage
                .from(bucketName)
                .upload(storagePath, blob, {
                    contentType: elem.type,
                    upsert: true,
            })

            if (error) {
                return {message: error.message}
            }

            const {data: publicUrlData} = supabase.storage
            .from(bucketName)
            .getPublicUrl(storagePath)

            const publicUrl = publicUrlData.publicUrl;

            urlArr.push(publicUrl);


        })

        const resultSendFiles = await Promise.all(sendFiles);



        // const optionFilesUpload 

        return { success: resultSendFiles, data: urlArr }

        // const categoryName = textFields.



    } catch (error) {

        return {message: error}

    }


    // return { data: files}

}


export default addOptionFile