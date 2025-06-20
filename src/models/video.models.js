import mongoose,{Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
 
import jwt from "jsonwebtoken"

import bcrypt from "bcrypt"


const videoSchema=new mongoose({
   
      videoFile:{
        type:String,
        required:true,
    
      },
      thumbnail:{
        type:String,
        required:true, 

      },
      title:{
        type:String,
        required:true,
      },
      description:{
        type:String,
        required:true, 
      },
      duration:{
        type:Number,   //cloudinary information 
        required:true,
      },
      views:{
        type:Number,
        default:0
         
      },
      isPublised:{
          type:Boolean,
          default:true,

      },
      owner:{
         type:Schema.Types.ObjectId,
          ref :"User",

      }

},{
    timestamps:true})

     


// videoSchema.plugin(mongooseAggregatePaginate)


export const Video=mongoose.model("Video",videoSchema); 

