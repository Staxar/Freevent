import Cities from "../../models/Cities";
import dbConnect from "../../util/mongodb";

 
export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if(method === "GET"){}
  if(method === "POST"){
    try {   
      const cities = await Cities.create(req.body);
      res.status(201).json(cities);

    }catch(err){
    res.status(500).json(err);
    }
  }
}