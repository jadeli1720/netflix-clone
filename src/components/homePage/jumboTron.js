import React from "react";


export default function Jumbotron({ title, subTitle, image, alt, direction }) {
	// console.log("login", title)
	return (
		<div className="jumboContainer">
			<div
				className="jumboTron"
				style={{ flexDirection: `${direction} ` }}
			>
				<div className="content">
					<h1>{title}</h1>
					<h2>{subTitle}</h2>
				</div>
				<div className="content">
					<img src={`${image}`} alt={`${alt}`} />
				</div>
			</div>
		</div>
	);
}
