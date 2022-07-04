import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  category: {
    type: String,
    required: true,
    maxlength: 200,
  },
});

export default mongoose.models.Categories ||
  mongoose.model("Categories", CategoriesSchema);
