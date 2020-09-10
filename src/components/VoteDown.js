import React from "react";
import "./VoteDown.css";
import { useDispatch } from "react-redux";
import { voteDatabase } from "../actions/actions";

const VoteDown = ({ id }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(voteDatabase({ id, direction: "down" }));
	};

	return (
		<div>
			<i className="fas fa-thumbs-down" onClick={handleClick}></i>
		</div>
	);
};

export default VoteDown;
