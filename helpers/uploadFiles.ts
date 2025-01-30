import { toRaw } from "vue";

export const useFileUpload = (emit: any) => {
    const handleFileUpload = (event: any, type: any, state: any, length?: number) => {
    //   console.log(event.target.files, type, "handleFileUpload");
      
      const accessedFormat = ["svg", "png"];
      const files = Array.from(event.target.files);

      if (files.length + length > 5) {
        emit("tooltip", {
            status: "error",
            message: "Максимальна кількість файлів 5",
        });
        return;
      }

    //   console.log(type, state, 'uploadThype')
  

      const typeFiles = state[`${type}Files`];
      const typePreview = state[`${type}FilesPreview`];
      const typeReady = state[`${type}Ready`];
  
     
      if (!typeFiles || !typePreview || !typeReady) {
        console.error("Неизвестный тип файла:", type);
        return;
      }
  
      typeReady.value = false;
  
      files.forEach((file: any) => {

        // console.log(file)
        const fileExtension = file.name.split(".").pop().toLowerCase();
        if (!accessedFormat.includes(fileExtension)) {
          emit("tooltip", {
            status: "error",
            message: "Файл повинен бути формату .svg .png",
          });
          return;
        }

        const rawFile = toRaw(file);


        typeFiles.value = [...toRaw(typeFiles.value), rawFile]
  
        // typeFiles.value.push(file);
  
        const reader = new FileReader();
        reader.onload = () => {
        //   typePreview.value.push(reader.result); 
            typePreview.value = [...toRaw(typePreview.value), reader.result];
        };
        // reader.readAsDataURL(file);
        reader.readAsDataURL(rawFile);
      });
  
      typeReady.value = true; 
    };
  
    return { handleFileUpload };
  };


//   export default useFileUpload;
  