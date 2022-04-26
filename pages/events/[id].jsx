import { getEvents, getEvent } from "../../services/events/getEvents"



export async function getStaticPaths() {


const events = await getEvents();
const paths = events.map((event) => ({
    params: {id: event._id.toString() }
}));
return { paths, fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
    const event = await getEvent(params.id);
    return { revalidate: 30, props: { eventProp: JSON.stringify(event) } };
  }
export default function Event ({ eventProp}) {
    const event = JSON.parse(eventProp);
    console.log(event, "JSON");
    return (
        <div className="container grid">
            
        </div>
    )
}