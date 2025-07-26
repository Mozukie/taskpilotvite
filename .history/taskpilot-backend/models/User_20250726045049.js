import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  employee_id: String,
  password: String, // hash in real use!
  confirmPassword: String, // do not store this in production!
});

const User = mongoose.model("User", userSchema);
export default User;
