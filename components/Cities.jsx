import React from "react";
import CitiesCard from './CitiesCard'


export default function Cities({ citiesList }) {
  return (
    
    <section className='cities section' id='cities'>
        <h2 className="section__title">Cities</h2>
        <div className="cities_container container swiper-container">
            <div className="swiper-wrapper">
                <div className="cities__content grid swiper-slide">
                  {citiesList.map((cities) =>(
                    <CitiesCard key={cities._id} cities={cities}/>
                  ))}                  
                </div>
            </div>
        </div>
    </section>

  );
};
