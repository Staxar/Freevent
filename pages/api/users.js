import Users from "../../models/Users";
import dbConnect from "../../util/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const users = await Users.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      console.log(req.body, "REQ.BODY");
      const users = await Users.create(req.body);
      console.log(users, "users API");
      res.status(201).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
