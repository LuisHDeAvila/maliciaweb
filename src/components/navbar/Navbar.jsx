import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';


// Conditional component example

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="malicia__navbar">
            <div className="malicia__navbar-links">
                
                <div className="malicia__navbar-links_logo">
                <img src=""/>
                </div>
                
                <div className="malicia__navbar-links_container">
                        <p><a href="#inicio">Inicio</a></p>
                        <p><a href="#blog">Blog</a></p>
                        <p><a href="#academy">academy</a></p>
                        <p><a href="#contacto">repositories</a></p>
                        <p><a href="#about">About</a></p>
                </div>
            </div>
            <div className="malicia__navbar-sign">
                <p>Iniciar sesion</p>
                <button type="button">Registrarse</button>
            </div>


            <div className="malicia__navbar-menu">
                {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="malicia__navbar-menu_container scale-up-center">
                        <div className="malicia__navbar-menu_container-links">
                        <p><a href="#inicio">Inicio</a></p>
                        <p><a href="#blog">Blog</a></p>
                        <p><a href="#academy">academy</a></p>
                        <p><a href="#contacto">repositories</a></p>
                        <p><a href="#about">About</a></p>
                        </div>
                        <div className="malicia__navbar-menu_container-links-sign">
                            <p>Iniciar sesion</p>
                            <button type="button">Registrarse</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;