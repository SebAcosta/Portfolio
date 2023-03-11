import React, { useState } from 'react';
import Slider from "react-touch-drag-slider"
import Modal from "../components/Modal";
import { FiChevronRight } from "react-icons/fi";


export const Proyectos = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="proyectos">
			<div className="pTitle">
				<h1 className="ptTxt">Mis proyectos</h1>
			</div>
			<div className="pBody">
				<div className="pbI">
					<img src={props.info.image} width="auto" height="100%"/>
				</div>
				<div className="pbP">
					<div className="pbpN">
						<h2 className="pbpnT">{props.info.title}</h2>
						<br/>
						<p className="pbpnTxt" style={isOpen?{color:"#2c3e5000"}:{}}>{props.info.desc}</p>
					</div>
					<div className="pbpF">
						<div className='chevron2' onClick={() => setIsOpen(isOpen?false:true)}>
							<FiChevronRight size={70} color={"#CAC4BD"}/>
						</div>
					</div>
					{isOpen && <Modal setIsOpen={setIsOpen} proyecto={props.info.proyecto} video={props.info.video}/>}
				</div>
			</div>
		</div>
	)
}

{/* <Carousel activeIndex={index} onSelect={handleSelect}>
	<Carousel.Item>
	<img
		className="d-block w-100"
		src="holder.js/800x400?text=First slide&bg=373940"
		alt="First slide"
	/>
	</Carousel.Item>
	<Carousel.Item>
	<img
		className="d-block w-100"
		src="holder.js/800x400?text=Second slide&bg=282c34"
		alt="Second slide"
	/>
	</Carousel.Item>
	<Carousel.Item>
	<img
		className="d-block w-100"
		src="holder.js/800x400?text=Third slide&bg=20232a"
		alt="Third slide"
	/>
	</Carousel.Item>
</Carousel> */}