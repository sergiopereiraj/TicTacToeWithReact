import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TicTacToe from "./TicTacToe.jsx";
import Titulo from "./Titulo.jsx";

//create your first component
const Home = () => {
	return (
		<div className="App">
			<Titulo />
			<TicTacToe />
		</div>
	);
};

export default Home;
