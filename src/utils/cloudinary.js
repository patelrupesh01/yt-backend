import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.cloud_name,
    apikey:process.env.apikey,
    api_secret:process.env.api_secret
});

const uploadOnCloudinary= async (localFilePath)=>{
     try {
          if (!localFilePath) {
              return null;
            
          }//upload the file on clpoduinary
         const response= await cloudinary.uploader.upload(localFilePath,{
             resource_type:"auto"
          })

    //file has been uploaded successfully
    console.log("file is uploded succefully on clodinary",response.url);
    return response;
     } catch (error) {
         fs.unlinkSync(localFilePath)//ye remove the locally saved temporary file as the upload operation got failed
         return null;
     }
}


export  {uploadOnCloudinary}