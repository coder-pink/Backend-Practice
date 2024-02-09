// require('dotenv').config({path : './env'})
// import { configDotenv } from "dotenv";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


// dotenv.config({
//     path : './env'
// })

const Port = process.env.PORT || 8000;

dotenv.config({ path: './env' });

connectDB()
.then(() => {
    app.on("error", (error) => {
                    console.log("Error : ", error);
                    throw error
                });
    app.listen(Port, () => {
        console.log(`server is running at ${Port}`)
    })
    
}).catch((err) => {
    console.log("MongoDb Connection is falied!!", err)
});









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


