import styled, { createGlobalStyle, css } from "styled-components"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import React, { useState } from "react"
import Slider from "react-touch-drag-slider"
import { Item } from "./Item";
import js from "../assets/images/js-logo.png"
import react from "../assets/images/React-icon.svg.png"
import native from "../assets/images/react-native.png"
import unity from "../assets/images/unity-logo.png"
import node from "../assets/images/node.logo.png"

const AppStyles = styled.main`
  height: 100%;
  width: 100%;
`;

const images = [
	{
		title: 'Nature Image1',
		url:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
		image:native,
	 },
	 {
		title: 'Nature Image2',
		url:
		  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
		image:node,
	},
	 {
		title: 'Nature Image3',
		url:
		  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
		image:unity,
	},
	 {
		title: 'Nature Image4',
		url:
		  'https://images.unsplash.com/photo-1608241175281-722a1c6111be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		image:react,
	},
	 {
		title: 'Nature Image5',
		url:
		  'https://images.unsplash.com/photo-1523288863878-c79329df9b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1386&q=80',
		image:js,
	},
]

export const Carosel = () => {
	const [index, setIndex] = useState(0);
	const setFinishedIndex = (i) => {
		console.log("finished dragging on slide", i);
		setIndex(i);
	};
	const next = () => {
		if (index < 4){
			setIndex(index + 1);
		} else{
			setIndex(0)
		}
	};
	const previous = () => {
		if (index > 0){
			setIndex(index - 1);
		}else{
			setIndex(4)
		}
	};
	return(
		<>
			<AppStyles>
				<Slider
					onSlideComplete={setFinishedIndex}
					onSlideStart={(i) => {
						console.clear();
						console.log("started dragging on slide", i);
					}}
					activeIndex={index}
					threshHold={100}
					transition={0.2}
					scaleOnDrag={true}
				>
					{images.map(({ url, image }, index) => (
						<Item image={image} key={index}/>
					))}
				</Slider>
				<div className="arrows">
					<div className="arrow" onClick={previous}>
						<FiChevronLeft size={30} color={"#FCFBFD"}/>
					</div>
					<div className="arrow" onClick={next}>
						<FiChevronRight size={30} color={"#FCFBFD"}/>
					</div>
				</div>
			</AppStyles>
		</>
	)
}