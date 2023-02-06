import React from "react";
import HeaderNav from "../homePage/header/HeaderNav";
import Footer from "../homePage/footer/Footer";
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
