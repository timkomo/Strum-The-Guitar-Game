
//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Strum The Guitar Game!</h1>
		<h2>Click to strum on any guitar to earn a point, but don't strum on the same guitar more than once. Strum all 12 guitars, and you win!</h2>
	</header>
);
export default Jumbotron;