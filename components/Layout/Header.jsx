import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { ViewGrid, About, Fire, Home, User, Phone, Moon, Map, Close } from '../Icons/Icons';
export default function Header() {
    const [active, setActive] = useState(false);

    

 function showMenu() {    
      document.getElementById('nav-menu').classList.add(active ? "" : "show-menu");
      setActive(a => !a);
    };
    function closeMenu() {    
      document.getElementById('nav-menu').classList.remove("show-menu");
      setActive(a => !a);
    };
    const toggleThemeRef = useRef();
  const toggleTheme = () => {
    toggleThemeRef.current.checked
    ? document.documentElement.setAttribute('data-theme', 'dark')
    : document.documentElement.setAttribute('data-theme', '');
  };

   
  return (
    <section className="header">
      <header className="header" id="header">
          <nav className="nav container">
            <a href="/" className="nav__logo">Fre(e)vent</a>
          
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
                    <i className="nav__close" id="nav-close" onClick={closeMenu}><Close /></i>
                </div>
                <div className="nav__btns">
                    {/* Theme change button */}                    
                     <input type="checkbox"  className="nav__icon change-theme" id="theme-button" ref={toggleThemeRef} onChange={toggleTheme}></input>
                    <div className="nav__toggle" onClick={showMenu} id="nav-toggle">
                        <i className="nav__icon"><ViewGrid /></i>
                    </div>
                </div>
                </nav>
      </header>
    </section>
  )
}
