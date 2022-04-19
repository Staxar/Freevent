import React from "react";
import CitiesCard from './CitiesCard'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Cities({ citiesList }) {
  return (
    
    <section className='cities section' id='cities'>
        <h2 className="section__title">Cities</h2>
        <div className="cities_container container">
              
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                  {citiesList.map((city) =>(
                    <SwiperSlide>
                      <CitiesCard 
                      key={city._id} 
                      city={city} 
                      cityid={city._id}
                      />
                    </SwiperSlide>  
                  ))}                   
                </Swiper>              
                    
        </div>
    </section>

  );
};
