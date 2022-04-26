import  dbConnect  from '../../util/mongodb';
import { ObjectId } from 'mongodb';
import Events from "../../models/Events";

export const getEvent = async (id) => {
  await dbConnect();
  const event = await Events.findById(id); 
  return event;
};

export const getEvents = async () => {
  await dbConnect();
  const events = await Events.find(); 
  console.log(events, "Events");
  // const events = await db
  // .collection('events')
  // .find()
  // .sort({ _id: 1 })
  // .toArray();

  return events;
};
