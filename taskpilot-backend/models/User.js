import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: { type: String, unique: true} ,
  email: { type: String, unique: true}, 
  employee_id: String,
  password: String, // hash in real use!
});

const User = mongoose.model("User", userSchema);
export default User;
