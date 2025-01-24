

// import supabase from '../utils/supabase'
import { createClient } from "@supabase/supabase-js";




export const uploadFiles = async (folderName: string, data: Object) => {

    const config = useRuntimeConfig();
    // const supabaseUrl = config.public.apiBaseUrl;
    // const supabaseKey = config.public.anonKey;

    // const supabase = createClient(supabaseUrl, supabaseKey);

            // console.log(supabaseUrl, supabaseKey, 'supabase')

    const bucketName = 'Images';
    const fileName = data[0].textEn;
    const date = new Date()

    // const imgName = data[0].textEn
    // console.log(data[0].textEn)

    const base64ToBlob = (base64, mimeType = '') => {
        const byteCharacters = atob(base64); // Декодируем Base64 строку в двоичные данные
        const byteNumbers = new Array(byteCharacters.length);
    
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
    
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mimeType });
    }

    const base64Data = data[0].file.split(',')[1]; // Извлекаем Base64 часть
    const mimeType = data[0].file.match(/data:(.*?);base64/)[1]; 
    
    const blob = base64ToBlob(base64Data, mimeType)

    console.log(blob)

    try {

        // const {data, error} = await supabase.storage
        // .from(bucketName)
        // .upload(`${folderName}/${fileName}${date.getTime()}`, blob)
        // console.log('upload data successful', error)

    } catch (error) {
        console.log('something went wrong')

    }




    // console.log(blob)


    // const uploadPromises = data
    
    
    
    
    // async () => {
    //     try{

    //     } catch (error){
    
    //     }
    // }

    

    

}