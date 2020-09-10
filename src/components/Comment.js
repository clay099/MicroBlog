import React from "react";
import "./Comment.css";
import { useDispatch } from "react-redux";
import { removeDatabaseComment } from "../actions/actions";

const Comment = ({ comment, postId, commentId }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(removeDatabaseComment({ commentId, postId }));
	};

	return (
		<p className="Comment">
			{comment}
			<i className="fas fa-backspace" onClick={handleDelete}></i>
		</p>
	);
};

export default Comment;
