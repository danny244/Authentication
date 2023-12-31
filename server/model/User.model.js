import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a unique username'],
      unique: [true, 'username exist']
    },

    password: {
      type: String,
      required: [true, 'Pleaase provide a password'],
      unique: false
    },

    email: {
      type: String,
      required: [true, 'Please provide a unique email'],
      unique: true
    },

    fistName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    address: { type: String },
    profile: { type: String },



  }
);

export default mongoose.model.Users || mongoose.model("User", userSchema)