import dbConnect from "../../util/mongodb";
import Categories from "../../models/Categories";

export const getCategories = async (category) => {
  await dbConnect();
  const categories = await Categories.find(category);
  return categories;
};
