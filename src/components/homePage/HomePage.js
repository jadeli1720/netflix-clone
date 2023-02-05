import React from "react";
import Header from "./Header";
import Jumbotron from "./JumboTron";
import Faq from "./Faq";
import faqData from "../../json/faqs.json";
import OptForm from "../Forms/OptForm";
import Footer from "./Footer";
import "./styles/index.scss";

//TODO:overall need to make things big or small based on screen size.

const HomePage = () => {
	return (
		<div>
			<Header />
			<Jumbotron />
			<div className="accordionContainer">
				<div className="inner">
					<h1 className="title">Frequently Asked Questions</h1>
					{faqData.map((item) => (
						<Faq
							key={item.id}
							header={item.header}
							body={item.body}
						/>
					))}
					<OptForm />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;
