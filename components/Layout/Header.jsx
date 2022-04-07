import React from 'react';
import { useState, useEffect } from 'react';
import { ViewGrid, About, Fire, Home, User, Phone, Moon, Map } from '../Icons/Icons';
export default function Header() {
/*     useEffect(() => {
        document.body.className = "light";
        
        return () => {
          document.body.className = "";
        }
      }, []); */


    const [isOpen, setIsOpen] = useState(false)
    useEffect(() =>{

      document.body.classList.toggle('dark-theme', isOpen);  
    }, [isOpen])
  return (
    <section className="header">
      <header className="header" id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo">Fre(e)vent</a>
          
          <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                            <i className='nav__icon'><Home /></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className='nav__icon'><About /></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#events" className="nav__link">
                            <i className='nav__icon'><Fire /></i> Events
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#cities" className="nav__link">
                            <i className='nav__icon'><Map /></i> Cities
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#profil" className="nav__link">
                            <i className='nav__icon'><User /></i> Profil
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i className='nav__icon'><Phone /></i> Phone
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close"></i>
                </div>
                <div className="nav__btns">
                    {/* Theme change button */}
                    <button onClick={()=> setIsOpen(!isOpen)}><i className="nav__icon change-theme" id="theme-button"><Moon /></i></button>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="nav__icon"><ViewGrid /></i>
                    </div>
                </div>
                </nav>
      </header>
    </section>
  )
}
