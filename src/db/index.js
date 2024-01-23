import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    // console.log("MongoDB URI:", process.env.MONGODB_URI);
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(connectionInstance);
        console.log(`\n MongoDB connected !! DB Host is : ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB Error is ", error);
        process.exit(1);
    }
}

export default connectDB  