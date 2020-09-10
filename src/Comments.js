import React from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const Comments = ({ id }) => {
	const comments = useSelector((st) => st.comments[id]);

	if (comments === undefined) {
		return null;
	}

	return (
		<div className="Comments">
			{Object.keys(comments).map((commentId) => (
				<Comment
					key={commentId}
					comment={comments[commentId].comment}
					postId={id}
					commentId={commentId}
				/>
			))}
		</div>
	);
};

export default Comments;
