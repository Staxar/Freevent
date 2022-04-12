import { RightArrow } from "./Icons/Icons";
const CardEvent = () => {
 
  return (
        <div className="events__content">
            <div className="img">Event_img</div>
            <div className="events__title">Event_1</div>
            <span class="button button--flex button--small button--link events__button">View More
              <i class="button--icon"><RightArrow /></i>
            </span>
        </div>
  );
};

export default CardEvent;