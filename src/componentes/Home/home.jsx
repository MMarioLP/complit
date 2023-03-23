/* Autor: Osmar Israel Villegas Martínez */

import React from "react";
import "../../estilos/Home/header.css";
import "../../estilos/Home/caracteristicas.css";
import "../../estilos/Home/services.css";
import "../../estilos/Home/NewsAndUpdate.css";
import "../../estilos/Home/colaboradores.css";
import "../../estilos/Home/AWorldGlobal.css";
import "../../estilos/Home/awardsAndCertifications.css";

import colab from "../../base-de-datos/colaboradores.json";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";





export function Header() {
    return (
      
      <div className="header-contenido">
        <img className="header-img col-12" src={require("../../imagenes/cabeza/Home.png")} alt="Imagen principal de un avión" />
        <h1 className="header-titulo-m col-8">OPTIMEN</h1>
        <p className="header-parrafo col-8">
        <FormattedMessage
        id="app.Introduccion"
        defaultMessage="Unique team of Resources Management and"
        />
        <br />
         <FormattedMessage
        id="app.Introduccion2"
        defaultMessage="Optimization Experts and passionate"
        />
        <br />
         <FormattedMessage
        id="app.Introduccion3"
        defaultMessage=" Software Developers."
        />
        
       
          </p>
      </div>
      
    );
}

export function Caracteristicas() {
  return (
    <div className="caracteristicas-contenido justify-content-center">
      <div className="caracteristicas-cuadros col-2">
        <div className="caracteristicas-titulos">
        <h2 className="caracteristicas-titulo">
        <FormattedMessage
        id="app.Home"
        defaultMessage="A World Class Global Enterprise"
        />
          </h2>
        </div>
        <p className="caracteristicas-texto">
        <FormattedMessage
        id="app.Home1.1"
        defaultMessage="Mexican Company with the following experience since 2006: Resource Optimization Consultancy and Configuration Support Services IT Software Solutions Development"
        />
          </p>
      </div>
      <div className="caracteristicas-cuadros col-2">
        <div className="caracteristicas-titulos">
        <h2 className="caracteristicas-titulo text">
        <FormattedMessage
        id="app.Home2"
        defaultMessage="Capabilities"
        />
          </h2>
        </div>
        <p className="caracteristicas-texto">
         
        <FormattedMessage
        id="app.Home2.1"
        defaultMessage="know more about us"/>

         </p>
        <img className="caracteristicas-imagen" src={require("../../imagenes/recursos/search.png")} alt="caracteristicas-img" />
      </div>
      <div className="caracteristicas-cuadros caracteristicas-our col-2">
        <div className="caracteristicas-titulos">
        <h2 className="caracteristicas-titulo text">
        <FormattedMessage
        id="app.Home3"
        defaultMessage="Our Porpuse"/>
        
          </h2>
        </div>
        <p className="caracteristicas-texto caracteristicas-our">
        <FormattedMessage
        id="app.Home3.1"
        defaultMessage=" Streamline the world mobility"/>
         </p>
      </div>
    </div>
    
  );
}

export function Services() {
  return(
    <div className="services-contenido">
      <div className="row">
      <h1 className="services-titulo col-12">
      <FormattedMessage
        id="app.S1"
        defaultMessage="Our Services"/>

        </h1>
      </div>
      <div className="contenido row justify-content-center">
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/implementation.png")} alt="Implementation" className="services-servicio-imagen" />
        <h4 className="services-servicio-nombre">
        <FormattedMessage
        id="app.S2"
        defaultMessage="Implementation"/>
          </h4>
      </div>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/innovation.png")} alt="Innovation" className="services-servicio-imagen" />
        <h4 className="services-servicio-nombre">
        <FormattedMessage
        id="app.S3"
        defaultMessage="Innovation"/>
          </h4>
      </div>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/interface_Developmen.png")} alt="Interfaces Development" className="services-servicio-imagen" />
        <h5 className="services-servicio-nombre">
        <FormattedMessage
        id="app.S4"
        defaultMessage="Interfaces Development"/>
          </h5>
      </div>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/consultancy.png")} alt="Consultancy" className="services-servicio-imagen" />
        <h4 className="services-servicio-nombre">
        <FormattedMessage
        id="app.S4"
        defaultMessage="Consultancy"/>
          </h4>
      </div>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/business_Rules_Developmen.png")} alt="Bussines Rules Developmen" className="services-servicio-imagen" />
        <h5 className="services-servicio-nombre">
        <FormattedMessage
        id="app.S5"
        defaultMessage="Bussines Rules Development"/>
          </h5>
      </div>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/auditing.png")} alt="Auditing" className="services-servicio-imagen" />
        <h4 className="services-servicio-nombre">
        <FormattedMessage
        id="app.S5"
        defaultMessage="Auditing"/>
          </h4>
      </div>
      </div>
    </div>
    
  );
}

export function AWorldGlobal() {
  return(
    <div className="AWorldGlobal-contenido">
      <div className="AWorldGlobal-titulo">
        <h5 className="AWorldGlobal-t">
        <FormattedMessage
        id="app.WO"
        defaultMessage="Why Choose Us"/>
         </h5>
        <h1 className="AWorldGlobal-t">
        <FormattedMessage
        id="app.WO1"
        defaultMessage="A World Class Global Enterprise"/>
         </h1>
      </div>
      <div className="AWorldGlobal-contenedor-capabilities">
        <div id="capabilitie" />
        {/* <img id="capabilitie" src={require("../../imagenes/dominik-scythe-lUGWwDAWpEk-unsplash.jpg")} alt="" /> */}
        {/* <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Airline Operations Expertise</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Analytics / Analysis Expertise</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Software Architecture</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Consulting & Business Development</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">New Products and R&D</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">High Technology Expertise</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Customer Trust</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Systems Implementation & Support</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Software Development</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Resource Optimization</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Resource Management</h3>
        </div>
        <div className="AWorldGlobal-capabilities">
          <h3 className="capabilitie">Operations Modeling</h3>
        </div> */}
      </div>

    </div>
  );
}

export function NewsAndUpdates() {
  return(
    
    <div className="newsAndUpdate-contenido">
      <div className="div-titulo">
        <h1 className="Titulo">
        <FormattedMessage
          id="app.NP"
          defaultMessage=" News and updates"
          />
      
         
         </h1>
      </div>
      <div className="fila">
        <div className="newsAndUpdate-noticias-1 col-2">
          <div className="tarjeta">
            <h3 className="newsAndUpdate-titulo-noticia">
              Forum BJXAEROSPACE
          
              </h3>
            <p className="newsAndUpdate-fecha"> 
           Oct 31, 2020
             </p>
            <p className="newsAndUpdate-texto">
            We invite you to participate in the \"2nd Business Forum of the Bajìo A.C Aerospace Cluster\", follow the conferences, panels, and meetups of the event on our platform and social networks. Click on the link: bjxaerospace.org and Register!
          
             </p>
          </div>
        </div>
        <div className="newsAndUpdate-noticias-2 col-2">
          <div className="tarjeta">
            <h4 className="newsAndUpdate-titulo-noticia">14th Anniversary OPTIMEN</h4>
            <p className="newsAndUpdate-fecha"> Oct 19, 2020 </p>
            <p className="newsAndUpdate-texto">14 years streamlining global mobility through a passionate software developers team. Congratulations TEAM Optimen!</p>
          </div>
        </div>
        <div className="newsAndUpdate-noticias-3 col-2">
          <div className="tarjeta">
            <h3 className="newsAndUpdate-titulo-noticia">4OPS by Optimen</h3>
            <p className="newsAndUpdate-fecha"> Oct 15, 2020 </p>
          <p className="newsAndUpdate-texto">We are proud of our new Technological Solution to achieve our Purpose: Streamline the World Mobility!</p>
          </div>
        </div>
        <div className="newsAndUpdate-noticias-4 col-2">
          <div className="tarjeta">
            <h4 className="newsAndUpdate-titulo-noticia">Red Hat Business Partner</h4>
            <p className="newsAndUpdate-fecha"> Aug 19, 2020 </p>
            <p className="newsAndUpdate-texto">We are pleased to announce that Optimen has been integrated as Business Partner Solution Provider by Red Hat. This alliance enhance our commitment to bring efficient and optimal solutions to our clients.</p>
          </div> 
        </div>
      </div>
      <button className="boton col-1"><Link to = "/News" className="news-boton">Learn more</Link></button>
    </div>
  );
}

export function Colaboradores() {
  return(
    <div className="colaboradores-contenido">
          <h1 className="colaboradores-titulo">
                      <FormattedMessage
          id="app.COL"
          defaultMessage=" Partnerships and Affiliations"
          />
        
            </h1>
      <div className="colaboradores-grupo">
      {colab.map((colab) => {
        const col = colab.direccion;
        return(
          <div className="colaboradores-colab">
            <img className="colaboradores-img" src={require(`../../imagenes/colaboradores/${col}.png`)} alt={colab.direccion} />
          </div>
        )}
      )}
      </div>
      </div>
  );
}

export function AwardsAndCertifications() {
  return(
    <div className="awardsAndCertifications-contenido">
      <div className="awardsAndCertifications-div-titulo">
        <h1 className="awardsAndCertifications-titulo">
          
        <FormattedMessage
        id="app.Award"
        defaultMessage="Awards And Certifications"
        />
          </h1>
      </div>
      <div className="awardsAndCertifications-awards">
        <div className="awardsAndCertifications-award">
          <img className="awardsAndCertifications-img" src={require("../../imagenes/reconocimientos/logo-Boeing.png")} alt="Logo Boeing" />
        </div>
        <div className="awardsAndCertifications-award">
          <img className="awardsAndCertifications-img" src={require("../../imagenes/reconocimientos/logo-MarcaGuanajuato.png")} alt="Logo Marca Guanajuato" />
        </div>
        <div className="awardsAndCertifications-award">
          <img className="awardsAndCertifications-img" src={require("../../imagenes/reconocimientos/reconocimiento-ESR.png")} alt="Reconocimiento ESR" />
        </div>
        <div className="awardsAndCertifications-award">
          <img className="awardsAndCertifications-img" src={require("../../imagenes/reconocimientos/reconocimiento-iso.png")} alt="Reconocimiento ISO" />
        </div>
      </div>
    </div>
  );
}

