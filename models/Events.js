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
      required: true,
    },
    city_id: {
      type: String,
      required: true,
    },
    start_date:{
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
    },
    ticket: {
        type: String,
    },
    ticket_prize: {
        type: [Number],
    }
  },
  { timestamps: true }
);

export default mongoose.models.Events ||
  mongoose.model("Events", EventsSchema);