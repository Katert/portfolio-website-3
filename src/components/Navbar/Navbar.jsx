import React from "react";
import { NavBarItems } from "./NavBarItems";
import {motion} from 'framer-motion';
import Logo from '../../img/LogoPW2.png';
import "../../css/Navbar.css";

function Navbar() {

	return (
		<motion.nav 
			className="navbar-items"
			initial={{y: -100}}
			animate={{y: 0}}
			transition={{duration: 1}}>
			{/* <img src={Logo} className="navbar-logo"/> */}
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
