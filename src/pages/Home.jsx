import React,{useContext} from "react";
import { Header, Caracteristicas, Services, NewsAndUpdates, Colaboradores, AwardsAndCertifications, AWorldGlobal } from '../componentes/Home/home';
import { Navbar, Footer} from '../componentes/Home/headerAndNavbar';
import {langContext} from '../context/langContext'




function Home () {
    const idioma = useContext(langContext);
        return (
          
            <div className="Home">
               
                < Navbar />
                <Header />
                <Caracteristicas />
                <AWorldGlobal />
                <Services />
                <NewsAndUpdates />
                <Colaboradores />
                <AwardsAndCertifications />
                < Footer />
               
            </div>
       
        )
    
}

export default Home;