import React from "react";
import { Digitos } from "./Digitos";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ counter }) => {
	// toString convierto los numeros en string padstart hace que no tenga 2 numeros en 1 string sobre 6 el resto los marca en 0 
	const counterStr = counter.toString().padStart(6, "0");
	
	
	return (

		<div className="container">
			<div className="counter">
				{/* split comvierto el string en array- .map para usar array */}
				{counterStr.split("").map((digito, index) => (
					<Digitos key={index} numero={digito} />
				))}
			</div>
		</div>


	);


};


export default Home;
