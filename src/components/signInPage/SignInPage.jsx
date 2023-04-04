import React from "react";
import HeaderNav from "../homePage/header/HeaderNav";
import Footer from "../homePage/footer/Footer";
import SignInForm from "../Forms/signIn_signUp_Forms/SignInForm";
import WarningMessage from "../warning/warningMessage";
//styling same as sign up --> maybe put these in the same folder?

export default function SignIn() {
	return (
		<>
			<WarningMessage/>
			<div className="headerContainer">
				<HeaderNav />
				<SignInForm />
				<div className="headerGradient" id="signInGradient"></div>
			</div>
			<Footer />
		</>
	);
}
