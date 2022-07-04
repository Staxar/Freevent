/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Layout from "../../components/Layout";
import { getCity } from "../../services/cities/getCities";
import { getEvents, getEvent } from "../../services/events/getEvents";

export async function getStaticPaths() {
  const events = await getEvents();
  const paths = events.map((event) => ({
    params: { id: event._id.toString() },
  }));
  return { paths, fallback: "blocking" };
}
export async function getStaticProps({ params }) {
  const event = await getEvent(params.id);
  const city = await City(event.city_id);
  return { revalidate: 30, props: { eventProp: JSON.stringify(event), city } };
}
async function City(id) {
  const city = await getCity(id);
  let cityname = "";
  if (city === null) {
    cityname = "";
  } else cityname = city.city;
  return cityname;
}

export default function Event({ eventProp, city }) {
  const event = JSON.parse(eventProp);

  return (
    <Layout>
      <section className="event__section section">
        <div className="container grid">
          <div className="event__title">{event.title}</div>
          <div className="event__image">
            <img src={event.img} alt="event_img"></img>
          </div>
          <div className="event__title">Event description</div>
          <div className="event__description">{event.desc}</div>
          <div className="event__title">Event date</div>
          <div className="event__card">
            <div className="event__content">
              <div className="event__start_date">{event.start_date}</div>
              <div className="event__end_date">{event.end_date}</div>
              <div className="event__city">{city ? city : ""}</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
