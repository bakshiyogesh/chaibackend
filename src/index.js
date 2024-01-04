// require('dotenv').config({path:'./env'}) #first method 
import dotenv from 'dotenv';
import {connectDB}  from "./db/index.js"; 
import { app } from './app.js';
dotenv.config({
    path:'./env'
}) 
connectDB().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("SERVER Is running at port:",process.env.PORT);
    })
}).catch((err)=>{
    console.log("MONGODB connection failed !!",err);
})


// import {express } from "express";
//  const app=express();

// (async()=>{
//  try {
//      mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//      app.on("error",()=>{
//         console.log("ERRR:",error);
//         throw error
//      })
//       app.listen(process.env.PORT,()=>{
//         console.log(`app listenning on port:${process.env.PORT}`)
//       })
//  } catch (error) {
//     console.log(error,'error');
//  }
// })()