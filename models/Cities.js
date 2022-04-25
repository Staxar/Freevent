import mongoose from "mongoose";

const CitiesSchema = new mongoose.Schema({
    city:{
        type: String,
        required: true,
        maxlength: 255,
    },
    lat:{
        type: String,
        maxlength: 255,
    },
    lng:{
        type: String,
        maxlength: 255,
    },
    country:{
        type: String,
        required: true,
        maxlength: 255,
    },
    iso2:{
        type: String,
        maxlength: 255,
    },
    voivodeship:{
        type: String,
        required: false,
        maxlength: 255,
    },
    capital:{
        type: String,
        maxlength: 255,
    },
    population:{
        type: String,
        maxlength: 255,
    },
    population_proper:{
        type: String,
        maxlength: 255,
    }
},{ timestamps: true }
)

export default mongoose.models.Cities || mongoose.model("Cities", CitiesSchema);