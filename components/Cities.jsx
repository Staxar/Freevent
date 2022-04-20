import React from "react";
import CitiesCard from './CitiesCard'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Cities({ citiesList }) {
  return (
    
    <section className='cities section' id='cities'>
        <h2 className="section__title">Cities</h2>
        <div className="cities_container container">
              
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
                
                  {citiesList.map((city,i) => {                  
                    if(i<10) {
                      return (                                                                           
                    <SwiperSlide key={city._id}>                                            
                      <CitiesCard
                      key={city._id}                         
                      city={city} 
                      />
                    </SwiperSlide>
                    )} 
                      })}                   
                </Swiper>              
                    
        </div>
    </section>

  );
};
