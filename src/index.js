// require('dotenv').config({path:'./env'})

// or

import dotenv from "dotenv"

import connectDB from "./db"
 



dotenv.config({path:'./env'})


connectDB()
.then(()=>{

    app.listen(process.env.PORT||8000, () => {
        console.log(`Server started on port,${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGO db connection failed!!!!",err);
})

//first approach !!!!

// import express from "express"
// const app=express()
//    //if-e

// ;( async ()=>{
   
//      try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.long("ERROR: ",error);
//             throw error;
//         })



//         app.listen(process.env.PORT,()=>{
//              console.log(`App is listening on port ${process.env.PORT}`);
//         })
//      } catch (error) {
//          console.error("Error is:",error);
//          throw err;
//      }
    
// })()

// function connectDB(){}

// connectDB()


