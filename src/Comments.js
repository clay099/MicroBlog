import React from "react";
import Comment from "./Comment";

const Comments = ({ comments, setPosts, id }) => {
	if (comments.length === 0) {
		return null;
	}

	return (
		<div className="Comments">
			{comments.map((comment) => (
				<Comment comment={comment} setPosts={setPosts} id={id} />
			))}
		</div>
	);
};

export default Comments;
