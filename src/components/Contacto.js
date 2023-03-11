import { FiGithub, FiMail, FiLinkedin, FiChevronUp } from "react-icons/fi";
import React, { useState } from 'react';

export const Contacto = () => {
	const [showDiv, setShowDiv] = useState(false);
	function handleScrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	function handleCopyToClipboard(text) {
		setShowDiv(true);
		setTimeout(() => {
		  setShowDiv(false);
		}, 1000);
		navigator.clipboard.writeText(text);
	}

	return (
		<div className="contacto">
			<h1>Contacto</h1>
			<div className="cBody">
				<div className="cb1">
					<div className="cb1I" title="Ir">
						<FiLinkedin size={"5vw"} color={"#FCFBFD"} />
					</div>
					<div className="cb1T">
						<a target="_blank" href="https://www.linkedin.com/in/sebastian-acosta-carrillo/">linkedin.com/in/sebastian-acosta-carrillo/</a>
					</div>
				</div>
				<div className="cb1">
					<div className="cb1I">
						<FiGithub size={"5vw"} color={"#FCFBFD"} />
					</div>
					<div className="cb1T">
						<a target="_blank" href="https://github.com/SebAcosta">github.com/SebAcosta</a>
					</div>
				</div>
				<div className="cb1">
					<div className="cb1I">
						<FiMail size={"5vw"} color={"#FCFBFD"} />
					</div>
					<div className="cb1T" onClick={() => {handleCopyToClipboard("eabastian@gmail.com")}}>
						<a>eabastian@gmail.com</a>
					</div>
					{showDiv && <a className="copiado">Copiado al portapapeles</a>}
				</div>
			</div>
			<div className="chevron" onClick={handleScrollToTop}>
				<FiChevronUp size={60} color={"#FCFBFD"} />
			</div>
		</div>
	)
}