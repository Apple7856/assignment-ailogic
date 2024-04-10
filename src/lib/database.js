import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
