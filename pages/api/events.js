import Events from "../../models/Events";
import dbConnect from "../../util/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const events = await Events.find();
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      console.log(req.body, "REQ.BODY");
      const events = await Events.create(req.body);
      console.log(events, "events API");
      res.status(201).json(events);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
