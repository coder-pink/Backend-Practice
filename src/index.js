// require('dotenv').config({path : './env'})
// import { configDotenv } from "dotenv";
import dotenv from "dotenv";
import connectDB from "./db/index.js";


// dotenv.config({
//     path : './env'
// })

dotenv.config({ path: './env' });
connectDB();









//first approch
// // function connectDB(){}
// // connectDB()

// import express from "express";
// const app = express();

// // ;(async () => {})() //; for cleaning purpoe
// (async () => {
//     try {
//         //db connect
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error : ", error);
//             throw error
//         });
//         app.listen(process.env.PORT , () => {
//             console.log(`app is listening on ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR :", error);
//         throw error;
//     }
// })()


