import { RightArrow } from "./Icons/Icons";
import Link from "next/link";
const CardEvent = ({ event, eventid }) => {
  console.log(event, "EVENT")
  return (
    <div className="events__content">
      <img src={event.img} alt="" className="events__img" />
      <div className="events__title">
        {event.title}
        </div>
      <Link href={`/events/${eventid}`} passHref>
        <span className="button button--flex button--small button--link events__button">
          View More
          <i className="button--icon">
            <RightArrow />
          </i>
        </span>
      </Link>
    </div>
  );
};

export default CardEvent;
