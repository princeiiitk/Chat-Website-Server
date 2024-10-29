import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const mongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB - Connected');
    } catch (error) {
        console.log("Error Prince MongoDB Connection: " + error);
    }
};

export default mongoDBConnect;
