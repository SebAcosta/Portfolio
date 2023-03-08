import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const Modal = ({ setIsOpen, proyecto }) => {
	const opts = {
		height: '350',
		width: '100%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	return (
		<>
			<div className="centered" style={{ top: proyecto }}>
				<div className="modal">
					<div className="modalContent">
						<YouTube videoId="5OrM-X2u17c" opts={opts} onReady={event=>{event.target.pauseVideo()}} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;