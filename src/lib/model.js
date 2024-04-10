import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

export const User = mongoose.model("user", UserSchema);

const BookSchema = mongoose.Schema({
  title: String,
  author: String,
  year: String,
});

export const Book = mongoose.model("book", BookSchema);
