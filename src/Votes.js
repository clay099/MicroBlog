import React from "react";
import VoteUp from "./VoteUp";
import VoteDown from "./VoteDown";
import "./Votes.css";
import { useSelector, shallowEqual } from "react-redux";

const Votes = ({ id }) => {
	const votes = useSelector((st) => st.posts[id].votes, shallowEqual) || 0;

	return (
		<div className="Votes">
			{votes} votes:
			<VoteUp id={id} />
			<VoteDown id={id} />
		</div>
	);
};

export default Votes;
