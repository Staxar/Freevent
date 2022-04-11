import banner from '../public/images/banner.png'
export default function Cities() {


  return (
    <section className='cities section' id='cities'>

        <h2 className="section__title">Cities</h2>
        <div className="cities_container container swiper-container">
            <div className="swiper-wrapper">
                <div className="cities__content grid swiper-slide">
                    <img src={banner.src}></img>
                    <div className="cities__data">
                    <h3 class="portfolio__title">Modern Website</h3>
                            <p class="portfolio__description">Website adaptable to all devices</p>
                            <a href="" class="button button--flex button--small cities__button">
                                Demo
                                <i class="button__icon"></i>
                            </a>
                    </div>
                </div>
            </div>

            <div className="siper-button-next">
                <i className="swiper-portfolio-icon"></i>
            </div>
            <div class="swiper-button-prev">
                    <i class="swiper-portfolio-icon"></i>
            </div>
            <div class="swiper-pagination"></div>

        </div>
    </section>

  )
}
