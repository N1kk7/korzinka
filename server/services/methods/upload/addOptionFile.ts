import { readMultipartFormData } from "#imports";
import { data } from "autoprefixer";
import supabase from '../../../../utils/supabase'


async function addOptionFile(event: any) {


    try{

        const files = await readMultipartFormData(event);

        if (!files || files.length === 0) {
            return {message: 'No files upload'}
        }

        // console.log()

    


        const uploadFiles = files.map(async (item, index) => {

            console.log(item, 'promise item')
            const folderName = item.name;
            const file = {
                name: item.filename,
                type: item.type,
                data: item.data
            };

            if (!folderName || !file) {
                throw new Error('Invalid file or folder name');
            }

            const fileBuffer = new Uint8Array(file.data);
            const blob = new Blob([fileBuffer], { type: file.type });

            const { data, error } = await supabase.storage
                .from('Images')
                .upload(
                    `${folderName}/${file.name}`, blob, {
                        contentType: file.type,
                        upsert: true
                    }
                )

                if (error) {
                    throw new Error('Fail to upload file', error)
                }

                return {
                    filePath: data.path,
                    message: 'File uploaded successfully'
                }

        })

        const results = await Promise.all(uploadFiles);

        return {
            success: true,
            data: results
        }



        // console.log(files, 'files')

        // return {data: files}
////////
        // for (const item of files) {
        //     console.log(item.name, 'name')
        //     console.log(item.data, 'item-data')

        //     if (item.type) {
        //         // console.log(item, 'itemoptions')

        //         // const {data, error} = await supabase.storage
        //         // .from('Images')
        //         // .upload(
        //         //     `testStorage/${date.getTime()}-${item.filename}`, item.data, {
        //         //         // contentType: item.type,
        //         //         upsert: true
        //         //     }
        //         //     // `testStorage/${fileData.name}${date.getTime()}`,
        //         //     // blob,
        //         //     // {
        //         //     //     contentType: fileData.type,
        //         //     //     upsert: true
        //         //     // }
        //         // )
        //         // if (error) {
        //         //     console.error('Error uploading file:', error.message);
        //         //     return { error: error.message };
        //         // }
    
        //         // if (data) {
        //         //     uploadedFilePath.push(data.path);
        //         //     return{dataPath: data.path}
        //         // }   else {
        //         //     console.error('File missing required properties:', item);
        //         // }

        //     } else if (item.name === 'groupName') {

        //     }
        // }

        // return {message: 'complete'}
//         for (const elem of files) {

//             if (elem.type && elem.filename) {

//                 const {data, error} = await supabase.storage
//                 .from('Images')
//                 .upload(
//                     `testStorage/${date.getTime()}-${elem.filename}`, elem.data, {
//                         contentType: elem.type,
//                         upsert: true
//                     }
//                     // `testStorage/${fileData.name}${date.getTime()}`,
//                     // blob,
//                     // {
//                     //     contentType: fileData.type,
//                     //     upsert: true
//                     // }
//                 )
//                 if (error) {
//                     console.error('Error uploading file:', error.message);
//                     return { error: error.message };
//                 }
    
//                 if (data) {
//                     uploadedFilePath.push(data.path);
//                     return{dataPath: data.path}
//                 }   else {
//                     console.error('File missing required properties:', elem);
//                 }

//             } 
//             // else if (elem.name) {
//             //     // Обрабатываем текстовые поля
//             //     textFields.push(elem.data.toString());
//             // }
//              else {
//                 console.log('Item without a name or type:', elem);
//             }
//             // const uploadedFiles: any[] = [];

//             // const file = elem.data

//             // return {data: file}

// //             if (file.type) {
// //                 uploadedFiles.push(file);
// //             } else if (file.name) {
// //                 textFields.push(file.data.toString());
// //             } else {
// //                 console.log('Item without a name:', file);
// //             }

// //             const getFiles = uploadedFiles[0];


// // ;
// //             // const getFiles = files
// //             const fileData = {
// //                 // name: file.filename,
// //                 // type: file.type,
// //                 // data: file.data
// //                 name: getFiles.name,
// //                 type: getFiles.type,
// //                 data: getFiles.data
// //             }

// //             const fileBuffer = new Uint8Array(fileData.data);
// //             const blob = new Blob([fileBuffer], { type: fileData.type });

//             // return {data: getFiles}

           

//             // if (error) {
//             //     // console.error('Error uploading file:', error.message);
//             //     continue;
//             // }

//             // if (data) {
//             //     // uploadedFilePath.push(data.path);
//             // }   else {
//             //     console.error('File missing required properties:', file);
//             // }

//             // uploadedFiles = []





//             // return {file: getFiles}
//         }
        return {
            message: 'Files uploaded successfully',
            // filePaths: uploadedFilePath, // Возвращаем массив путей
        };



    } catch (error) {
        console.error('Error handling files:', error);
        return { message: 'Error processing files', error: error };
      }
    }









//     try{
//         const files = await readMultipartFormData(event);
        

//         if (!files || files.length === 0) {
//             return {message: 'No files upload'}
//         }


//         const getFiles = files[0];

//         const textFields: Record<string, string> = {};
//         const uploadedFiles: any[] = [];

//         const date = new Date();
//         // for (const item of getFiles.data) {
//         //     // return {data: item.data}
//         //     if (item) {
                
//         //     }

//         //     return {data: item}
//             // item.forEach((elem: any) => {
//             //     if (elem.type) {
//             //         uploadedFiles.push({
//             //             // item
//             //             name: elem.filename,
//             //             type: elem.type,
//             //             data: elem.data
//             //     });
//             //     } else if (elem.name) {
//             //         textFields[elem.name] = item.data.toString();
//             //     } else {
//             //         console.log('Item without a name:', elem);
//             //     }
//             // })
            
//         // }

//         return {data: getFiles.data}

//         const groupName = textFields.groupName;

//         const urlArr: string[] = [];

//         if (uploadedFiles.length === 0) {
//             return {message: 'object data is empty'}
//         }


//         const sendFiles = uploadedFiles.map(async(elem) => {




//             // const fileBuffer = new Uint8Array(elem.data);
//             const blob = new Blob([elem.data], {type: elem.type});

//             const fileName = `${groupName}${date.getTime()}`

//             const bucketName = 'Images';
//             const categoryFolder = groupName
//             const storagePath = `${categoryFolder}/${fileName}`;

//             const {data, error} = await supabase.storage
//                 .from(bucketName)
//                 .upload(storagePath, blob, {
//                     contentType: elem.type,
//                     upsert: true,
//             })

//             if (error) {
//                 return {message: error.message}
//             }

//             const {data: publicUrlData} = supabase.storage
//             .from(bucketName)
//             .getPublicUrl(storagePath)

//             const publicUrl = publicUrlData.publicUrl;

//             urlArr.push(publicUrl);


//         })

//         const resultSendFiles = await Promise.all(sendFiles);



//         // const optionFilesUpload 

//         return { success: resultSendFiles, data: urlArr }

//         // const categoryName = textFields.



//     } catch (error) {

//         return {message: error}

//     }


//     // return { data: files}

// }


export default addOptionFile