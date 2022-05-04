import Categories from "../../models/Categories";
import dbConnect from "../../util/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const categories = await Categories.find();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const categories = await Categories.create(req.body);
      res.status(201).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
