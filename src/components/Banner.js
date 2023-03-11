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
                    <p className="info">Consectetur ut irure eu cillum aliquip dolor ex aliqua officia fugiat labore in minim consectetur. Duis labore aute cillum fugiat id. Occaecat consequat cillum ut minim ex magna. Proident aliqua nostrud labore est est laboris. Voluptate in Lorem consectetur est cillum non culpa magna velit cupidatat est velit. Dolor non culpa nulla consectetur cupidatat occaecat tempor</p>
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