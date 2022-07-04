import React from "react";
import CardEvent from "./CardEvent";

export default function Events({ eventsList }) {
  return (
    <section className="events section" id="events">
      <h2 className="section__title">Events</h2>
      <div className="events__container container grid">
        {eventsList.map((event, i) => {
          if (i < 6) {
            return (
              <CardEvent key={event._id} event={event} eventid={event._id} />
            );
          }
        })}
      </div>
    </section>
  );
}
