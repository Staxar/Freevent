import Cities from "../../models/Cities";
import dbConnect from "../../util/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  // /api/eventcities?city=city.name
  // GET, req query.city --> Cities.find

  if (method === "GET") {
    try {
      const cities = await Cities.find();
      res.status(200).json(cities);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const cities = await Cities.create(req.body);
      res.status(201).json(cities);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
