import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        maxlength: 255,
    },
    second_name:{
        type: String,
        maxlength: 255,
    },
    age:{
        type: Number,
        required: true,
        maxlength: 100,
    },
})

export default mongoose.models.Users || mongoose.model("Users", UsersSchema);