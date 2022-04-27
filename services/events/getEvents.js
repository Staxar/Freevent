import  dbConnect  from '../../util/mongodb';
import Events from "../../models/Events";

export const getEvent = async (id) => {
  await dbConnect();
  const event = await Events.findById(id); 
  return event;
};

export const getEvents = async () => {
  await dbConnect();
  const events = await Events.find(); 
  // const events = await db
  // .collection('events')
  // .find()
  // .sort({ _id: 1 })
  // .toArray();

  return events;
};
