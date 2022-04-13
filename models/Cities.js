import mongoose from "mongoose";

const CitiesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 255,
    },
    country:{
        type: String,
        required: true,
        maxlength: 255,
    },
    voivodeship:{
        type: String,
        required: true,
        maxlength: 255,
    },
    postal_code:{
        type: String,
        required: true,
        maxlength: 255,
    }
})

export default mongoose.models.Cities || mongoose.model("Cities", CitiesSchema);