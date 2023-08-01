import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: false, unique: true },
});
const User = mongoose.model("users", userSchema);
