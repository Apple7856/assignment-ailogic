"use server";
import { connectDB } from "./database";
import { User } from "./model";

export const RegisterUser = async (data) => {
  try {
    connectDB();
    const newUser = new User(data);
    await newUser.save();
    return "success";
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async (data) => {
  try {
    connectDB();
    const newUser = await User.find(data);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};
