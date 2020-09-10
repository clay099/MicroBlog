import React from "react";
import "./VoteUp.css";
import { useDispatch } from "react-redux";
import { voteDatabase } from "../actions/actions";

const VoteUp = ({ id }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(voteDatabase({ id, direction: "up" }));
	};

	return (
		<div>
			<i className="fas fa-thumbs-up" onClick={handleClick}></i>
		</div>
	);
};

export default VoteUp;
