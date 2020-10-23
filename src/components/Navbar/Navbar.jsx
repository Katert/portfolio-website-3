import React from "react";
import { NavBarItems } from "./NavBarItems";
import {motion} from 'framer-motion';
import Logo from '../../img/LogoPW2.png';
import "../../css/Navbar.css";

function Navbar() {

	var prevScrollPosition = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPosition = window.pageYOffset;
		if (prevScrollPosition > currentScrollPosition) {
			document.getElementById('navbar').style.top = "0";
		} else {
			document.getElementById('navbar').style.top = "-50px";
		}
		prevScrollPosition = currentScrollPosition;
	}

	return (
		<motion.nav 
			id="navbar"
			className="navbar-items"
			initial={{y: -100}}
			animate={{y: 0}}
			transition={{duration: 1}}>
			<ul
				className="nav-menu"
			>
				{NavBarItems.map((item, index) => {
					return (
						<li key={index}>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</motion.nav>
	);
}

export default Navbar;
