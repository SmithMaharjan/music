import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("the server is running");
    } catch (error) {
        console.log("something went wrong");
        process.exit(1);
    }
};
export default connectDB;
