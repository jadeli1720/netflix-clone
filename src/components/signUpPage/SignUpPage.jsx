import React from "react";
import HeaderNav from "../homePage/header/HeaderNav";
import Footer from "../homePage/footer/Footer";
import SignUpForm from "../Forms/signIn_signUp_Forms/SignUpForm";

//Will need it's own css to override the header Gradient styling to be at 100% height and the footer to be position relative with z-index at 1

export default function SignUp() {
	return (
		<>
			<div className="headerContainer">
				<HeaderNav />
				<SignUpForm />
				<div className="headerGradient" id="signUpGradient"></div>
			</div>
			<Footer />
		</>
	);
}
