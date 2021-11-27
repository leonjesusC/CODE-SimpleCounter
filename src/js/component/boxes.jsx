import React from "react";
import PropTypes from "prop-types";

const Boxes = props => {
	return (
		<>
			<div className="row justify-content-center">
				<div id="boxy">
					<h1 id="boxTextClock">
						<i className="far fa-clock"></i>
					</h1>
				</div>
				<div id="boxy">
					<h1 id="boxText">{props.digitOne}</h1>
				</div>
				<div id="boxy">
					<h1 id="boxText">{props.digitTwo}</h1>
				</div>
				<div id="boxy">
					<h1 id="boxText">{props.digitThree}</h1>
				</div>
				<div id="boxy">
					<h1 id="boxText">{props.digitFour}</h1>
				</div>
				<div id="boxy">
					<h1 id="boxText">{props.digitFive}</h1>
				</div>
				<div id="boxy">
					<h1 id="boxText">{props.digitSix}</h1>
				</div>
			</div>
		</>
	);
};

Boxes.propTypes = {
	digitOne: PropTypes.string,
	digitTwo: PropTypes.string,
	digitThree: PropTypes.string,
	digitFour: PropTypes.string,
	digitFive: PropTypes.string,
	digitSix: PropTypes.string
};

export default Boxes;
