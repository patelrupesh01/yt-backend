import mongoose ,{Schema}from "mongoose";
 
import jwt from "jso nwebtoken"

import bcrypt from "bcrypt"


const userSchema=new Schema(
    {
     username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
     }
    ,
   email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        
     },
     fullname: {
        type:String,
        required:true,
        trim:true,
        index:true
     },

     avatar:{
         type:String,  //cloudinary url rakhege yaha pr 
         required:true,
    
         
     },
     coverImg:{
         type:String,   //cloudinary url 
         

     },
     watchHistory:[
         {
            type:Schema.Types.ObjectId,
            ref:"Video"
         }
     ]
     ,
     password:{
        type:String,
        required:[true,'Password is required!!'],
        

     },
     refreshtoken:{
         type:String ,

     }




}
,{
    timestamps:true
}
)

userSchema.pre("save", async function(next){
      //yaha callback use nhi kia kuki yaha muje this key word ka use krnan tha wo muje this key word ki functionality provide krwata he ,agar callback use krta to wo use nhi krne deta
      if(!this.isModified("password")){
        return next();
      }
      this.password=bcrypt.hash(this.password,10)
      next()

}
)


userSchema.methods.isPasswordCorrect=async function (password) {
   return await bcrypt.compare(password,this.password)
    
}

userSchema.methods.generateAccessToken =function(){
       jwt.sign({
         _id:this._id,
         email:this.email,
         username:this.username,
         fullname:this.fullname,
       },
       process.env.ACCESS_TOKE_SECRECT,
       {
         expiresIn:process.env.ACCESS_TOKE_EXPIRY
       }
    
    )
}
userSchema.methods.generateRefreshToken=function(){
    jwt.sign({
        _id:this._id
      },
      process.env.REFRESH_TOKE_SECRECT,
      {
        expiresIn:process.env.REFRESH_TOKE_EXPIRY
      }
   
   )
}
export const User=mongoose.model("User",userSchema);

