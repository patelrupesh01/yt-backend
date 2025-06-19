import mongoose from "mongoose";
import { DB_NAME } from "../constants";



const connectDB=async ()=>{
 
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`\n MONGODB connected !!! DB host ${connectionInstance}`);
         
    }
    catch(error){
          console.log("MONGODB error:",error);
          process.exit(1);
    }
} 
    

export default connectDB();
