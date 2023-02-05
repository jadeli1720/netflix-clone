import React from "react";
import HeaderNav from "../homePage/HeaderNav";
import Footer from "../homePage/Footer";
import SignUpForm from "../Forms/SignUpForm";

export default function SignUp() {
	return (
		<>
			<div className="headerContainer">
				<HeaderNav />
				<SignUpForm />
				<div className="headerGradient"></div>
			</div>
			<Footer />
		</>
	);
}
