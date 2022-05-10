import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
    },
    www: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    youtube: {
      type: String,
    },
    city_id: {
      type: String,
      required: true,
    },
    place: {
      type: String,
    },
    type: {
      type: String,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
    },
    subcategory: {
      type: String,
      required: true,
    },
    ticket: {
      type: String,
    },    
  },
  { timestamps: true }
);

export default mongoose.models.Events || mongoose.model("Events", EventsSchema);
