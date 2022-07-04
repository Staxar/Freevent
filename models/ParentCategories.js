import mongoose from "mongoose";

const ParentCategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
});

export default mongoose.models.ParentCategories ||
  mongoose.model("ParentCategories", ParentCategoriesSchema);
