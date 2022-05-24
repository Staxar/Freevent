import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      maxlength: 100,
    },
    name: {
      type: String,
      maxlength: 200,
    },
    email: {
      type: String,
      maxlength: 200,
    },
    age: {
      type: Number,
      maxlength: 100,
    },
    passwordSalt: {
      type: String,
      maxlength: 100,
    },
    passwordHash: {
      type: String,
      maxlength: 255,
    },
}
);

export default mongoose.models.Users || mongoose.model("users", UsersSchema);
