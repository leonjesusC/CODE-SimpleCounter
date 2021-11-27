//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import Boxy from "./component/boxes.jsx";

let myVar;
let county = 0;
let ceroes = [0, 0, 0, 0, 0, 0];
let digit1 = 0;

function tust() {
	county = county + 1;
	let stringy = county.toString();
	let divide = stringy.split("");
	let size = divide.length;
	let displaySize = 6 - size;
	let display = [];
	let limiter = 0;

	for (let i = 1; i <= displaySize; i++) {
		display.push("0");
	}

	for (let b = 0; b <= size - 1; b++) {
		display.push(divide[b]);
	}

	let helpme = display.map(x => parseInt(x, 10));

	limiter = helpme.reduce((a, b) => a + b, 0);

	if (limiter === 54) {
		window.location.reload();
	} else {
		ReactDOM.render(
			<div>
				<Home />
				<Boxy
					digitOne={display[0]}
					digitTwo={display[1]}
					digitThree={display[2]}
					digitFour={display[3]}
					digitFive={display[4]}
					digitSix={display[5]}
				/>
			</div>,
			document.querySelector("#app")
		);
	}
}

window.onload(setInterval(tust, 1000));
