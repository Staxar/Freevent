import ParentCategories from "../../models/ParentCategories";
import dbConnect from "../../util/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const parentcategories = await ParentCategories.find();
      res.status(200).json(parentcategories);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const parentcategories = await ParentCategories.create(req.body);
      res.status(201).json(parentcategories);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
