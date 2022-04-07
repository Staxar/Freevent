import React from 'react';
import { Facebook, Instagram, Tiktok, Mouse, ChevronDown } from './Icons/Icons';
import banner from '../public/images/banner.png'
function Home() {
console.log(banner)
  return (
    <section className='home section' id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
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
              <img src={ banner.src } alt=''></img>

          </div>
          <div className="home__data">
            <h1 className="home__title">Fre(e)vent</h1>
            <h3 className="home__subtitle">Create and find your events</h3>
            <p className="home__description">This website allow you to create and share with people events you create or find</p>
            <a href="#profil" className="button button--flex">Create Account</a>
          </div>
        </div>
        <div class="home_scroll">
                    <a href="#about" class="home__scroll-button button--flex">
                        <i class="home__scroll-mouse"><Mouse /></i>
                        <span class="home__scroll-name">Scroll down</span>
                        <i class="home__scroll-arrow"><ChevronDown /></i>
                    </a>
                </div>
      </div>
    </section>
  )
}
export default Home;