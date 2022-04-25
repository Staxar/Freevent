
export default function CitiesCard ( { city }) {
  return (
    <div className ="cities__content">
      <div className="cities__title">{city.city}</div>
      <div className="cities__description">{city.voivodeship}</div>  
      <div className="cities__description">{city.country}</div>           
    </div>
  );
};