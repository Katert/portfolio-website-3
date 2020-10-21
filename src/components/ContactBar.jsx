import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import "../css/ContactBar.css";

export default function ContactBar() {
	return (
		<div className="contact-bar">
			<HiOutlineMail className="mail-icon" />
			<p>E-mail</p>
			<span>wesley.kater@icloud.com</span>
		</div>
	);
}
