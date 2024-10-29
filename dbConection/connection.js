import mongoose from "mongoose";

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
