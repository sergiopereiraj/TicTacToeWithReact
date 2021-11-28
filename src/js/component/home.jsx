import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TicTacToe from "./TicTacToe.jsx";
import Titulo from "./Titulo.jsx";

//create your first component
const Home = () => {
	const [Jugadores, setJugadores] = useState(true);
	const changes = () => {
		setJugadores(false);
	};
	return (
		<>
			<div className="App">
				<Titulo />
				{Jugadores === true ? (
					<>
						<div className="container" id="jugadores">
							<label>Play#1</label>
							<input id="player1"></input>
							<label>Play#2</label>
							<input id="player2"></input>
						</div>
						<div className="container" id="jugadores">
							<button
								type="button"
								onClick={() => changes()}
								className="btn btn-success">
								Click me to start
							</button>
						</div>
					</>
				) : (
					<TicTacToe />
				)}
			</div>
		</>
	);
};

export default Home;
