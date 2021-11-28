import React, { useState } from "react";
import "./TicTacToe.css";

const Jugadores = () => {
	return (
		<>
			<div className="container" id="jugadores">
				<label>Play#1</label>
				<input id="player1"></input>
				<label>Play#2</label>
				<input id="player2"></input>
			</div>
			<div className="container" id="jugadores">
				<button type="button" className="btn btn-success">
					Click me to start
				</button>
			</div>
		</>
	);
};

export default Jugadores;
