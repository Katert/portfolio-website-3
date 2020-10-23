import React, { useEffect } from "react";
import "../css/About.css";
import ProfileImg from "../img/About3.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

	useEffect(() => {
		AOS.init({duration: 750})
	}, []);

	return (
		<div id="about" className="main-section">
			<div data-aos="fade-up" className="main-container">
				<h1>Hi, I'm Wesley.</h1>
				<div className="main-content">
					<div className="main-text">
						<h2>
							I'm a junior front end developer living in
							Amsterdam.
						</h2>
						<p>
							Being mostly a self-taught developer, I've also
							finished an intensive 14-weeks full-stack developer
							bootcamp organised by Code For All, The Netherlands.
							This is the Dutch branch from the Portuguese
							organisation Academia de Codigo.
							<br />
							I enjoy solving problems with creative solutions.
							I'm a fan of simplistic yet eye-pleasing designs and
							thought-out user experiences. 
						</p>
					</div>
					<div className="main-image">
						<img
							src={ProfileImg}
							alt="selfie"
							className="main-img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
