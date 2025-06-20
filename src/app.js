import express from "express"

import cors from "cors"
import cookieParser from "cookie-parser"


const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:"16kb",
   
}))
app.use(express.urlencoded({
     extended:true
    ,limit:"16kb"
    }))

app.use(express.static("public"))
app.use(cookieParser())





///routes import


import userRouter from './routes/user.routes.js'




//routes declaration
// app.get()  isse kam ho rha tha kyuki yahi routes aur controller likj rhe the

app.use("/api/v1/users",userRouter);

// https://localhost:800/api/v1/users/register









export {app}


