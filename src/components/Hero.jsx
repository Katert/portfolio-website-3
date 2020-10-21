import React from "react";
import "../css/Hero.css";
import HeroImg from "../img/Profile.svg";
import { motion } from "framer-motion";

function Hero() {
	return (
		<div>
			<div id="home" className="hero-section">
				<div className="hero-wrapper">
					<div className="column-left">
						<div className="column-left-text">
							<span>01. WESLEY KATER</span>
							<h1>Front End Developer</h1>
						</div>
						<p>
							Currently available for a job,{" "}
							<a
								href="#contact"
								style={{ color: "rgb(40, 212, 140)" }}
							>
								contact me
							</a>
							.
						</p>
					</div>
					<div className="column-right">
						<img
							src={HeroImg}
							alt="hero-img"
							className="hero-img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
