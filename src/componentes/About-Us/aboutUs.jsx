/* Autor: Osmar Israel Villegas Martínez */

import React from "react";
import "../../estilos/About-Us/headerAbout.css";
import "../../estilos/About-Us/aboutVideo.css";
import "../../estilos/About-Us/experience.css";
import "../../estilos/About-Us/ourStory.css";
import "../../estilos/About-Us/innovationHub.css";
import Carousel from "react-bootstrap/Carousel";
import { FormattedMessage } from "react-intl";



export function HeaderAbout() {
  return (
    <div className="HeaderAbout-Contenedor">
      <Carousel className="HeaderAbout-Carousel">
        <Carousel.Item className="HeaderAbout-item">
          <Carousel.Caption className="HeaderAbout-caption">
            <h3 className="HeaderAbout-Titulo">
              <FormattedMessage
                id="app.About"
                defaultMessage="What is Optimen?"
              />
            </h3>
            <p className="HeaderAbout-texto">
              <FormattedMessage
                id="app.About2"
                defaultMessage=" Optimen is a Mexican Software Development company that provides
            resources management and optimization services to different
            industries. The company was designated and approved as an
            International Service Contractor for Jeppesen and Boeing."
              />

            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="HeaderAbout-item">
          <Carousel.Caption className="HeaderAbout-caption">
            <h3 className="HeaderAbout-Titulo">
              <FormattedMessage
                id="app.About3"
                defaultMessage="Mission"
              />
            </h3>
            <p className="HeaderAbout-texto">
              <FormattedMessage
                id="app.About4"
                defaultMessage="Support and facilitate Air Lines around the world to maintain
            reliable and sustainable operations through Technology, Innovation
            and living our Values."
              />

            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="HeaderAbout-item">
          <Carousel.Caption className="HeaderAbout-caption">
            <h3 className="HeaderAbout-Titulo">
              <FormattedMessage
                id="app.About5"
                defaultMessage="Vision"
              />
            </h3>
            <p className="HeaderAbout-texto">
              <FormattedMessage
                id="app.About6"
                defaultMessage=" To be the First option in Software, Technology and Innovation
            services for the global Airlines in the area of Aeronautical
            operational control."
              />

            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="HeaderAbout-item">
          <Carousel.Caption className="HeaderAbout-caption">
            <h3 className="HeaderAbout-Titulo">
              <FormattedMessage
                id="app.About7"
                defaultMessage="Values"
              />
            </h3>
            <ul className="HeaderAbout-texto">
              <li>
                <FormattedMessage
                  id="app.About9"
                  defaultMessage="Trustworthy"
                />
              </li>

              <li><FormattedMessage
                id="app.About10"
                defaultMessage="Respect"
              />
              </li>

              <li><FormattedMessage
                id="app.About11"
                defaultMessage="Integrity"
              /></li>

              <li>
                <FormattedMessage
                  id="app.About12"
                  defaultMessage="Teamwork"
                />
              </li>

              <li>
                <FormattedMessage
                  id="app.About13"
                  defaultMessage="Innovation"
                />
              </li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export function AboutVideo() {
  return (
    <div className="AboutVideo-contenedor">
      <div className="AboutVideo-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/odFaxAu7s5w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <div className="Experience-contenido">
      <h1 className="Experience-AirlineExp">
        <FormattedMessage
          id="app.About14"
          defaultMessage="Airline Experience"
        />
      </h1>
      <div className="Experience-cuadro">
        <div id="Experience-experiencia-1">
          <div className="Experiencia-movimiento"></div>
          <h5 className="Experience-titulo">
            <FormattedMessage
              id="app.About15"
              defaultMessage="Experience 1"
            />
          </h5>
          <p className="Experience-descripcion">
            <FormattedMessage
              id="app.About16"
              defaultMessage="Associated with long experience in the Airline Industry with high
            trust and tight relation with commercial airlines and industry key
            players."
            />

          </p>
        </div>
        <div id="Experience-experiencia-2">
          <h5 className="Experience-titulo">
            <FormattedMessage
              id="app.About17"
              defaultMessage="Experience 2"
            />
          </h5>
          <p className="Experience-descripcion">
            <FormattedMessage
              id="app.About18"
              defaultMessage="Broad experience developing software in real Airline Operational
            Control Systems and implementation of Optimization Software."
            />

          </p>
        </div>
        <div id="Experience-experiencia-3">
          <h5 className="Experience-titulo">
            <FormattedMessage
              id="app.About19"
              defaultMessage="Experience 3"
            />
          </h5>
          <p className="Experience-descripcion">
            <FormattedMessage
              id="app.About20"
              defaultMessage="Strong Project Management following the industry best practices."
            />

          </p>
        </div>
      </div>
    </div>
  );
}

export function OurStory() {
  return (
    <div className="OurStory-contenido container">
      <div className="OurStory-cuadro-title">
        <h1 className="OurStory-cuadro-title-text">
          <FormattedMessage
            id="app.Story"
            defaultMessage="Our Story Through the Time"
          />

          <hr />
        </h1>
      </div>
      <div className="OurStory-cuadro">
        <div className="OurStory-cuadro-izquierda">
          <div>
            <img
              className="OurStory-img"
              src={require("../../imagenes/Story/story-1.jpg")}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h1 className="OurStory-cuadro-anios">2006 - 2015</h1>
            <h3 className="OurStory-cuadro-subtitulo">
              <FormattedMessage
                id="app.Story2"
                defaultMessage="First years"
              />
            </h3>
            <p className="OurStory-cuadro-descripcion">
              <FormattedMessage
                id="app.Story3"
                defaultMessage=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consequat in magna at sagittis."
              />

            </p>
            <ul className="OurStory-cuadro-suceso">
              <li>
                <FormattedMessage
                  id="app.Story4"
                  defaultMessage="The beginning"
                />
              </li>
              <li><FormattedMessage
                id="app.Story5"
                defaultMessage="First support team"
              /></li>
              <li><FormattedMessage
                id="app.Story6"
                defaultMessage="On the big league"
              /></li>
            </ul>
          </div>
        </div>
        <div className="OurStory-cuadro-derecha">
          <div>
            <h1 className="OurStory-cuadro-anios">2016 - 2018</h1>
            <h3 className="OurStory-cuadro-subtitulo">
              <FormattedMessage
                id="app.Story7"
                defaultMessage="Opening"
              />
            </h3>
            <p className="OurStory-cuadro-descripcion">
              <FormattedMessage
                id="app.Story8"
                defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consequat in magna at sagittis."
              />

            </p>
            <ul className="OurStory-cuadro-suceso">
              <li>
                <FormattedMessage
                  id="app.Story9"
                  defaultMessage="Our Opening"
                />
              </li>
              <li><FormattedMessage
                id="app.Story10"
                defaultMessage="Optimen and the Aerospace Cluster"
              /></li>
              <li>
                <FormattedMessage
                  id="app.Story11"
                  defaultMessage="First South American Client"
                />
              </li>
              <li><FormattedMessage
                id="app.Story12"
                defaultMessage="Guanajuato Talent"
              /></li>
              <li><FormattedMessage
                id="app.Story13"
                defaultMessage="Go Innovation Forum"
              /></li>
              <li><FormattedMessage
                id="app.Story14"
                defaultMessage="Other Relationships"
              /></li>
            </ul>
          </div>
          <div>
            <img
              className="OurStory-img"
              src={require("../../imagenes/Story/story-2.jpg")}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="OurStory-cuadro-izquierda">
          <div>
            <img
              className="OurStory-img"
              src={require("../../imagenes/Story/story-3.jpg")}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h1 className="OurStory-cuadro-anios">2019 - 2020</h1>
            <h3 className="OurStory-cuadro-subtitulo">
              <FormattedMessage
                id="app.Story15"
                defaultMessage="Growth"
              />
            </h3>
            <p className="OurStory-cuadro-descripcion">
              <FormattedMessage
                id="app.Story16"
                defaultMessage=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consequat in magna at sagittis."
              />

            </p>
            <ul className="OurStory-cuadro-suceso">
              <li>
                <FormattedMessage
                  id="app.Story17"
                  defaultMessage="Innovation Hub Optimen"
                /></li>
              <li>
                <FormattedMessage
                  id="app.Story18"
                  defaultMessage="Going global"
                />
              </li>
              <li> <FormattedMessage
                id="app.Story19"
                defaultMessage="UTNG relationship"
              /></li>
              <li><FormattedMessage
                id="app.Story20"
                defaultMessage="Aeroclúster Querétaro"
              /></li>
              <li>
                <FormattedMessage
                  id="app.Story21"
                  defaultMessage="CANIETI-CLUTIG"
                />
              </li>
              <li>
                <FormattedMessage
                  id="app.Story22"
                  defaultMessage='Distinctive "Marca GTO"'
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="OurStory-cuadro-derecha">
          <div>
            <h1 className="OurStory-cuadro-anios">2021 - 2023</h1>
            <h3 className="OurStory-cuadro-subtitulo">
              <FormattedMessage
                id="app.Story23"
                defaultMessage="Actually"
              />
            </h3>
            <p className="OurStory-cuadro-descripcion">
              <FormattedMessage
                id="app.Story24"
                defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consequat in magna at sagittis."
              />

            </p>
            <ul className="OurStory-cuadro-suceso">
              <li>
                <FormattedMessage
                  id="app.Story25"
                  defaultMessage='Distinctive "Marca GTO"'
                />
              </li>
              <li>
                <FormattedMessage
                  id="app.Story26"
                  defaultMessage="EDUCAFIN EVOLUCIONA"
                />
              </li>
            </ul>
          </div>
          <div>
            <img
              className="OurStory-img"
              src={require("../../imagenes/Story/story-4.jpg")}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function InnovationHub() {
  return (
    <div className="InnovationHub-contenido">
      <div className="container">
        <div className="InnovationHub-titulo">
          <h1 className="innovationHub-titulo-text">
            <FormattedMessage
              id="app.Innovation"
              defaultMessage="Innovation Hub"
            />
          </h1>
        </div>
        <div className="InnovationHub-cuadro">
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-1">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-1.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">
                  <FormattedMessage
                    id="app.Innovation2"
                    defaultMessage="Hannover Messe"
                  />
                </h1>
              </div>
              <div className="InnovationHub-back-1">
                <h1 className="InnovationHub-cuadro-titulo">
                  <FormattedMessage
                    id="app.Innovation2"
                    defaultMessage="Hannover Messe"
                  />
                </h1>
                <p className="InnovationHub-descripcion">

                  <FormattedMessage
                    id="app.Innovation3"
                    defaultMessage='Optimen family present at " Industrial Transformation Mexico,
            Hannover Messe " HANNOVER MESSE is the most important
            international platform and hot spot for industrial
            transformation - with excellent innovations or unusual
            products.'
                  />

                </p>
                <p className="InnovationHub-fecha">
                  <FormattedMessage
                    id="app.Innovation4"
                    defaultMessage="Jun 24, 2020"
                  />
                </p>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-2">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-2.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">
                  <FormattedMessage
                    id="app.Innovation5"
                    defaultMessage="Ana Avatar XPrize"
                  />
                </h1>
              </div>
              <div className="InnovationHub-back-2">
                <h1 className="InnovationHub-cuadro-titulo">
                  <FormattedMessage
                    id="app.Innovation5"
                    defaultMessage="Ana Avatar XPrize"
                  />
                </h1>
                <p className="InnovationHub-descripcion">
                  <FormattedMessage
                    id="app.Innovation6"
                    defaultMessage="Optimen teamed up with Inbiodroid are working together on ANA
            Avatar XPRIZE challenge that aims to create an Avatar system
            that can transport human presence to a remote location in real
            time."
                  />

                </p>
                <p className="InnovationHub-fecha">
                  <FormattedMessage
                    id="app.Innovation7"
                    defaultMessage="Jan 01, 2020"
                  />
                </p>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-3">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-3.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">
                  <FormattedMessage
                    id="app.Innovation8"
                    defaultMessage="Innovation Hub"
                  />
                </h1>
              </div>
              <div className="InnovationHub-back-3">
                <h1 className="InnovationHub-cuadro-titulo">
                  <FormattedMessage
                    id="app.Innovation9"
                    defaultMessage="Innovation Hub"
                  />
                </h1>
                <p className="InnovationHub-descripcion">
                  <FormattedMessage
                    id="app.Innovation10"
                    defaultMessage="Optimen inaugurated its innovation center, a space focus on
            competencies development for the aeronautical sector."
                  />

                </p>
                <p className="InnovationHub-fecha">
                  <FormattedMessage
                    id="app.Innovation11"
                    defaultMessage="Feb 12, 2019"
                  />
                </p>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-4">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-4.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">
                  <FormattedMessage
                    id="app.Innovation12"
                    defaultMessage="EDUCATE OPTIMEN"
                  />
                </h1>
              </div>
              <div className="InnovationHub-back-4">
                <h1 className="InnovationHub-cuadro-titulo"><FormattedMessage
                  id="app.Innovation12"
                  defaultMessage="EDUCATE OPTIMEN"
                /></h1>
                <p className="InnovationHub-descripcion"><FormattedMessage
                  id="app.Innovation12"
                  defaultMessage="EDUCATE OPTIMEN"
                /></p>
                <p className="InnovationHub-fecha">
                  <FormattedMessage
                    id="app.Innovation13"
                    defaultMessage="Dec 08, 2021"
                  /></p>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-5">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-5.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">
                  <FormattedMessage
                    id="app.Innovation14"
                    defaultMessage="Aws Mentefactura GTO Challenge"
                  />

                </h1>
              </div>
              <div className="InnovationHub-back-5">
                <h1 className="InnovationHub-cuadro-titulo"> 
                <FormattedMessage
                  id="app.Innovation14"
                  defaultMessage="Aws Mentefactura GTO Challenge"
                /></h1>
                <p className="InnovationHub-descripcion">
                  <FormattedMessage
                    id="app.Innovation16"
                    defaultMessage=" Hackathon organized by the alliance between AWS, Optimen,
            Educafin, IdeaGTO, SEG and GAP with the purpose that students,
            Guanajuato talent, will execute innovative projects aimed at
            improving airport services."
                  />
                </p>
                <p className="InnovationHub-fecha">
                  <FormattedMessage
                    id="app.Innovation17"
                    defaultMessage="Apr 20, 2021"
                  />
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
