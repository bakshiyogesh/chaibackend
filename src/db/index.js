import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB=async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`\n MOngoDB_URI !! DB HOST ${connectionInstance.connection.host}`)
    } catch (error)  {
        console.log("CONNECTION ERROR.Please check your connection method:",error);
        process.exit(1);
    }
}