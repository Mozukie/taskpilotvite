import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  employee_id: String,
  password: String, // hash in real use!
});

const User = mongoose.model("User", userSchema);

export default User;
