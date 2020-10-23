import React, { Component } from "react";
import Axios from "axios";
import "../css/Contact.css";
import ContactImg from "../img/Contact2.svg";
import AOS from "aos";
import "aos/dist/aos.css";

class ContactForm extends Component {
	state = {
		fname: "",
		lname: "",
		email: "",
		subject: "",
		phone: null,
		company: "",
		message: "",
		sent: false,
		isSending: false,
		buttonText: "Send message",
		buttonDisabled: false,
	};

	resetForm = () => {
		this.setState({
			fname: " ",
			lname: " ",
			email: " ",
			subject: " ",
			phone: null,
			company: " ",
			message: " ",
			isSending: false,
			buttonText: "Message sent!",
			buttonDisabled: true,
		});
	};

	formSubmit = (e) => {
		e.preventDefault();

		this.setState({ isSending: true, buttonDisabled: true });

		let formData = {
			fname: this.state.fname,
			lname: this.state.lname,
			email: this.state.email,
			subject: this.state.subject,
			phone: this.state.phone,
			company: this.state.company,
			message: this.state.message,
		};

		Axios.post(
			"https://portfolio-contactform-api.herokuapp.com/api/v1",
			formData
		)
			.then((res) => {
				if (res.data.success) {
					this.setState({
						sent: true,
						buttonDisabled: true,
						buttonText: "Message sent!",
					});
				} else {
					this.setState({ buttonDisabled: false });
				}
			})
			.then(() => {
				this.resetForm();
			})
			.catch((error) => {
				console.log(Error(error));
				this.setState({
					buttonDisabled: false,
					buttonText: "Try again",
				});
			});
	};

	render() {
		AOS.init({ duration: 750 });

		return (
			<div data-aos="fade-up" id="contact" className="contact-section">
				<h1>Contact</h1>
				<p className="contact-subtitle">
					Let's talk. Give me a call at +31 6 31694714 or send me an e-mail.
				</p>
				<div className="contact-container">
					<div className="contact-form">
						<form onSubmit={this.formSubmit}>
							<div className="form-fields">
								<div className="field">
									<label className="label contact">
										First name{" "}
										<span className="required">*</span>
									</label>
									<div className="control">
										<input
											id="fname-input"
											className="input"
											type="text"
											name="fname"
											onChange={(e) =>
												this.setState({
													fname: e.target.value,
												})
											}
											required
										/>
									</div>
								</div>

								<div className="field">
									<label className="label contact">
										Last name{" "}
										<span className="required">*</span>
									</label>
									<div className="control">
										<input
											id="lname-input"
											className="input"
											type="text"
											name="lname"
											onChange={(e) =>
												this.setState({
													lname: e.target.value,
												})
											}
											required
										/>
									</div>
								</div>

								<div className="field">
									<label className="label contact">
										E-mail{" "}
										<span className="required">*</span>
									</label>
									<div className="control">
										<input
											id="email-input"
											className="input"
											type="email"
											name="email"
											onChange={(e) =>
												this.setState({
													email: e.target.value,
												})
											}
											required
										/>
									</div>
								</div>

								<div className="field">
									<label className="label contact">
										Subject{" "}
										<span className="required">*</span>
									</label>
									<div className="control">
										<input
											id="subject-input"
											className="input"
											name="subject"
											onChange={(e) =>
												this.setState({
													subject: e.target.value,
												})
											}
											required
										/>
									</div>
								</div>

								<div className="field">
									<label className="label contact">
										Phone
									</label>
									<div className="control">
										<input
											id="phone-input"
											className="input"
											type="number"
											name="phone"
											onChange={(e) =>
												this.setState({
													phone: e.target.value,
												})
											}
										/>
									</div>
								</div>

								<div className="field">
									<label className="label contact">
										Company
									</label>
									<div className="control">
										<input
											id="company-input"
											className="input"
											type="text"
											name="company"
											onChange={(e) =>
												this.setState({
													company: e.target.value,
												})
											}
										/>
									</div>
								</div>
							</div>

							<div id="message-input" className="field">
								<label className="label contact">
									Message <span className="required">*</span>
								</label>
								<div className="control">
									<textarea
										className="textarea"
										rows="8"
										name="message"
										onChange={(e) =>
											this.setState({
												message: e.target.value,
											})
										}
										required
									></textarea>
								</div>
							</div>

							<div className="control">
								<button
									id="contact-submit"
									className={
										this.state.isSending
											? "button is-white is-outlined is-inverted is-loading"
											: "button is-black is-outlined is-inverted"
									}
									type="submit"
									name="submit"
									disabled={this.state.buttonDisabled}
								>
									{this.state.buttonText}
								</button>
							</div>
							<br />
							<p className="label contact">
								Fields with <span className="required">*</span>{" "}
								are required.
							</p>
						</form>
					</div>
					<div className="contact-image">
						<img
							src={ContactImg}
							alt="contact-image"
							className="contact-img"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactForm;
