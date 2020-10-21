import React, {useEffect} from "react";
import "../css/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { MdOpenInNew } from "react-icons/md";
import { ImGithub } from "react-icons/im";

function Projects(props) {

	useEffect(() => {
		AOS.init({duration: 750})
	}, []);

	let workData = props.workData;
	const populateWork = () => {
		return workData.map((project) => {
			return (
				<div className="project-card">
					<div className="project-image">
						<img
							src={require("../img/work/" + project.image)}
							className="project-img"
						/>
					</div>
					<div className="project-text">
						<div className="project-desc">
							<p>{project.title}</p>
						</div>
						<div className="project-links">
							<ImGithub
								href={project.repo}
								className="project-link"
							></ImGithub>
							<MdOpenInNew className="project-link">
								<a href={project.url} />
							</MdOpenInNew>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div id="projects" className="projects-section">
			<div data-aos="fade-up" className="projects-container">
			<h1>Projects</h1>
				<div className="projects-content">{populateWork()}</div>
			</div>
		</div>
	);
}

export default Projects;
