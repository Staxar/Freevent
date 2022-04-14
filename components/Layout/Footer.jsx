import React from 'react'
import { Facebook, Instagram, Tiktok } from '../Icons/Icons'

export default function Footer() {
  return (
    <footer>
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Freevent</h1>
            <span className="footer__subtitle">Free events 4 u</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href='#events' className='footer__link'>Events</a>
            </li>
            <li>
              <a href='#profil' className='footer__link'>Profil</a>
            </li>
            <li>
              <a href='#cities' className='footer__link'>Cities</a>
            </li>
          </ul>
          <div className="footer__socials">
          <a href="https://www.facebook.com/" target="_blank" className="home__social-icon">
                <i className=""><Facebook /></i>
            </a>
            <a href="https://instagram.com/" target="_blank" className="home__social-icon">
                <i className=""><Instagram /></i>
            </a>
            <a href="https://tiktok.com/" target="_blank" className="home__social-icon">
                <i className=""><Tiktok /></i>
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
