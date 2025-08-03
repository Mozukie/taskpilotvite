import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true}, 
  employee_id: {type: String, unique: true},
  password: String, // hash in real use!
});

const User = mongoose.model("User", userSchema);
export default User;
