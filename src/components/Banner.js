import React from "react"
import { Carosel } from "./Carosel"

export const Banner = () =>{
    function handleScrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
      }
    return(
        <div className="both">
            <div className="main">
                <h1 className="name">Sebastián Acosta</h1>
                <h2 className="title">Ingeniero de software</h2>
                <div className="divInfo">
                    <p className="info">Soy un ingeniero de software con conocimiento en aplicaciones móviles, APIs, videojuegos y páginas web. He colaborado como desarrollador en múltiples aplicaciones en frontend, backend, diseño y recopilación de requerimientos. Me apasiona la innovación y la creatividad, pensar en nuevas soluciones y trabajar en nuevos proyectos</p>
                </div>
                <div className="divBtns">
                    <div className="btn" onClick={() => handleScrollToSection("section1")}>
                        <p className="boton">Proyectos</p>
                        <hr/>
                    </div>
                    <div className="btn" onClick={() => handleScrollToSection("section2")}>
                        <p className="boton">Contacto</p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="carouselContainer">
                <div className="carousel">
                    <Carosel />
                </div>
            </div>
        </div>
    )
}