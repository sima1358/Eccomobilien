import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number },
});

const User = model("user", userSchema);

export default User;
