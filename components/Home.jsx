import { Facebook, Instagram, Tiktok } from './Icons/Icons';
export default function Home() {

  return (
    <section className='home section' id="home">
      <div className="home__container container grid">
        <div className="home__conent grid">
          <div className="home__social">
            <a href="https://www.facebook.com/" target="_blank" class="home__social-icon">
                <i class=""><Facebook /></i>
            </a>
            <a href="https://instagram.com/" target="_blank" class="home__social-icon">
                <i class=""><Instagram /></i>
            </a>
            <a href="https://tiktok.com/" target="_blank" class="home__social-icon">
                <i class=""><Tiktok /></i>
            </a>
          </div>
          <div className="home__img">
            
          </div>
        </div>
      </div>

    </section>
  )
}