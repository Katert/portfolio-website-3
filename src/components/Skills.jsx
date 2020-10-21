import React, { useEffect } from "react";
import "../css/Skills.css";
import { motion } from "framer-motion";
import SkillsImg from "../img/Skills.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills(props) {
	useEffect(() => {
		AOS.init({ duration: 750 });
	}, []);

	let skillsArray = props.skillsData;
	const populateSkillList = (type) => {
		return skillsArray.map((skill) => {
			if (skill.type === type) {
				return (
					<motion.div
						className="skill-icon"
						key={skill.name}
						initial={{ opacity: -10 }}
						animate={{ opacity: 1 }}
						transition={{ duration: skill.animateDuration }}
					>
						<i className={skill.icon} />
					</motion.div>
				);
			}
		});
	};

	return (
		<div id="skills" className="skills-section">
			<div data-aos="fade-up" className="skills-wrapper">
				<div className="skills-summary">
					<h1>My skills</h1>
					<div className="skills-overview">
						<h3 className="skills-type">Programming languages</h3>
						<div className="skills-icon-wrapper">
							{populateSkillList("language")}
						</div>
						<h3 className="skills-type">Libraries & Frameworks</h3>
						<div className="skills-icon-wrapper">
							{populateSkillList("libfra")}
						</div>
						<h3 className="skills-type">Tools & Platforms</h3>
						<div className="skills-icon-wrapper">
							{populateSkillList("topl")}
						</div>
					</div>
				</div>
				<div className="skills-image">
					<img
						src={SkillsImg}
						alt="skills-img"
						className="skills-img"
					/>
				</div>
			</div>
		</div>
	);
}

export default Skills;
