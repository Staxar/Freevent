import dbConnect from "../../util/mongodb";
import Cities from "../../models/Cities";

export const getCity = async (id) => {
  await dbConnect();
  const city = await Cities.findById(id);
  return city;
};

export const getCities = async () => {
  console.log("Hello get Cities");
  await dbConnect();
  console.log("dbConnect");
  const cities = await Cities.find();
  // const events = await db
  // .collection('events')
  // .find()
  // .sort({ _id: 1 })
  // .toArray();
  console.log(cities, "Cities in getCities");
  return cities;
};
