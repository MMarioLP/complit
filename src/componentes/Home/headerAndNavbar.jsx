import React, { useState,useContext} from "react";
import "../../estilos/Home/headerAndNavbar.css";
import { Link } from "react-router-dom";
import {langContext} from '../../context/langContext'
import es from '../../imagenes/spain.png';
import en from '../../imagenes/united-kingdom.png';
import { FormattedMessage } from "react-intl";




export function Navbar() {
 
 
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
   
    <nav className="nav">
      <a className="nav__brand cursor">
        <img
          src={require("../../imagenes/logos/logo-optimen.png")}
          alt="Logo de la empresa"
          href="#"
        />
      </a>
      <ul className={active} style={{margin:"0"}}>
        <li className="nav__item">
          <Link to="/Home" className="nav__link">
          <FormattedMessage
          id="app.NH"
          defaultMessage="Home"
          />
           
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Customers" className="nav__link">
          <FormattedMessage
          id="app.NC"
          defaultMessage="Customers"
          />
           
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/About-Us" className="nav__link">
          <FormattedMessage
          id="app.NA"
          defaultMessage="About us"
          />
            
          </Link>
        </li>
        <li className="nav__item">
        <Link to="/News" className="nav__link">
        <FormattedMessage
          id="app.NE"
          defaultMessage="News"
          />
            
            </Link>
        </li>
        <li className="nav__item">
        <Link to="/Contact-Us" className="nav__link">
        <FormattedMessage
          id="app.NCU"
          defaultMessage="Contact us"
          />
            
            </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
   
  );
}

export function Footer() {
  const idioma = useContext(langContext);

  // Estado para controlar la visibilidad de los botones desplegables
  const [mostrarBotones, setMostrarBotones] = useState(false);

  // Función para cambiar el estado de los botones desplegables
  const toggleBotones = () => {
    setMostrarBotones(!mostrarBotones);
  };

  return (
    <footer>
      <p1>Optimen</p1>
      <p>info@mysite.com</p>
      <p>&copy;2023 por Optimen. </p>

      {/* Botón flotante */}
      <button className="boton-flotante" onClick={toggleBotones}>
      <i class="fa-solid fa-language"></i>
      </button>

      {/* Botones desplegables */}
      {mostrarBotones && (
        <div className="botones-desplegables">
          <button onClick={() => idioma.establecerLenguaje("es-MX")}>
            <span className="tras">es</span>
          </button>
          <button onClick={() => idioma.establecerLenguaje("en-US")}>
            <span className="tras">en</span>
          </button>
        </div>
      )}
    </footer>
  );
}
