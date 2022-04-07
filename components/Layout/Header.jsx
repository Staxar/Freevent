import React from 'react';
import { ViewGrid, About, Fire, Home, User, Phone, Moon, Map } from '../Icons/Icons';
export default function Header() {
  return (
    <section className="header">
      <header className="header" id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo">Fre(e)vent</a>
          
          <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">
                            <i className='nav__icon'><Home /></i> Home
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#about" class="nav__link">
                                <i className='nav__icon'><About /></i> About
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#events" class="nav__link">
                            <i className='nav__icon'><Fire /></i> Events
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#cities" class="nav__link">
                            <i className='nav__icon'><Map /></i> Cities
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#profil" class="nav__link">
                            <i className='nav__icon'><User /></i> Profil
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#contact" class="nav__link">
                            <i className='nav__icon'><Phone /></i> Phone
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" id="nav-close"></i>
                </div>
                <div class="nav__btns">
                    {/* Theme change button */}
                    <i class="nav__icon change-theme" id="theme-button"><Moon /></i>
                    <div class="nav__toggle" id="nav-toggle">
                        <i class="nav__icon"><ViewGrid /></i>
                    </div>
                </div>
                </nav>
      </header>
    </section>
  )
}
