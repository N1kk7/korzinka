// ADDING NEW CATEGORY TO API
import { createRouter, defineEventHandler, useBase } from "#imports";
import fs from 'fs';
import formidable from 'formidable';
import prisma from "@/prisma/prisma";
import path from "path";
// import supabase from "@/utils/supabase";
// import supabase from "@/utils/supabase";

const router = createRouter();

router.get('/categories', defineEventHandler(() => {
    return 'ololo';
}));

export default useBase('/api/categories', router.handler)

// const filePath = path.resolve(process.cwd(), 'utils/supabase.ts');
// console.log('Resolved path to supabase.ts:', filePath);


// export default defineEventHandler(async(event) => {
//     const uploadDir = path.join(process.cwd(), 'uploaded'); 

//     const form = new formidable.IncomingForm({ 
//         // uploadDir: __dirname + '/uploaded',
//         uploadDir: uploadDir,
//         keepExtensions: true,
//         maxFileSize: 50,
//     });

//     return new Promise((res, rej) => {

//         form.parse(event.node.req, async (err, fields, files) => {
//             if(err) {
//                 return rej({ error: 'Помилка завантаження файлу'});
//             }

            
//             const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
//             const group = Array.isArray(fields.group) ? fields.group[0] : fields.group;

//             if (!title || !group) {
//                 return rej({ error: 'Назва групи обовʼязкова' });
//               }

//             const fileKey = Object.keys(files)[0];
//             const fileData = files[fileKey];
//             // const file = files[fileKey];
//             const file = Array.isArray(fileData) ? fileData[0] : fileData;
//             if (!file) {
//                 return rej({ error: 'Файл не знайдений'})
//             }

//             const filePath = file.filepath;
//             const fileName = file.originalFilename

//             try{
//                 const { data, error } = await supabase.storage
//                     .from('Images')
//                     .upload(`Images/categoryImg/${Date.now()}_${fileName}`, fs.createReadStream(filePath), {
//                         cacheControl: '3600',
//                         upsert: false,
//                     })

//                     if (error || !data) {
//                         return rej({error: error?.message || 'Ошибка загрузки файла' })
//                     }

//                     const { data: publicUrlData } = supabase.storage.from('Images').getPublicUrl(data.path);
//                     const publicUrl = publicUrlData?.publicUrl;

//                     if (!publicUrl) {
//                         return rej({ error: "Ошибка получения публичного URL" });
//                       }

//                     await prisma.category.create({
//                         data: {
//                           group,
//                           title,
//                           visible: true, // По умолчанию true
//                           categoryImg: publicUrl,
//                         },
//                       });

    
    
//                     res({ success: true });
    
//             } catch (err){
//                 return rej({success: true, error: err});
//             }

//         })

       

//     })




// })

