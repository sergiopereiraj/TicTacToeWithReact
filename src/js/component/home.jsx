import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TicTacToe from "./TicTacToe.jsx";

//create your first component
const Home = () => {
	return (
		<div className="App">
			<TicTacToe />
		</div>
	);
};

export default Home;
