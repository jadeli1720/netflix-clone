import React from "react";
import HeaderNav from "../homePage/HomePage";
import Footer from "../homePage/footer/Footer";
import SignInForm from "../Forms/SignInForm";

export default function SignIn() {
	return (
		<>
			<div className="headerContainer">
				<HeaderNav />
				<SignInForm />
				<div className="headerGradient"></div>
			</div>
			<Footer />
		</>
	);
}
