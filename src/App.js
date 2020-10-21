import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { motion } from "framer-motion";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

class App extends Component {
	constructor() {
		super();
		this.state = {
			skills: [],
			work: [],
		};
	}

	componentDidMount() {
		axios
			.get("./data/skills.json")
			.then((response) => {
				this.setState({
					skills: response.data.skills,
				});
			})
			.catch((error) => {
				Error("Something went wrong.\n" + error);
			});

		axios
			.get("./data/work.json")
			.then((response) => {
				this.setState({
					work: response.data.work,
				});
			})
			.catch((error) => {
				Error("Something went wrong.\n" + error);
			});
	}

	render() {
		return (
			<motion.div
				className="App"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Navbar />
				<Hero />
				<About />
				<Skills skillsData={this.state.skills} />
				<Projects workData={this.state.work} />
				<Contact />
			</motion.div>
		);
	}
}

export default App;
