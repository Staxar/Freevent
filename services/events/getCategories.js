import dbConnect from "../../util/mongodb";
import Categories from "../../models/Categories";
import ParentCategories from "../../models/ParentCategories";

export const getCategories = async (category) => {
  await dbConnect();
  const categories = await Categories.find(category);
  return categories;
};

export const getParentCategories = async (category) => {
  await dbConnect();
  const ParentCategories = await ParentCategories.find(category);
  return ParentCategories;
};
