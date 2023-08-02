import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: false, unique: true },
  credits: { type: Number, default: 0 },
});
const User = mongoose.model("users", userSchema);
