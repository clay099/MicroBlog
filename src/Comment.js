import React from "react";
import "./Comment.css";

const Comment = ({ comment, setPosts, id }) => {
	const handleDelete = () => {
		// uses setPosts hook to change data
		setPosts((posts) =>
			// maps over all items in list
			[...posts].map((p) =>
				// checks if post is the current one we are on
				p.id !== id
					? // if not current post return the post
					  p
					: {
							// if is the post spread the post data
							...p,
							// filter all post data to remove the current comment
							comments: p.comments.filter((c) => c !== comment),
					  }
			)
		);
	};
	return (
		<p className="Comment">
			{comment}
			<i className="fas fa-backspace" onClick={handleDelete}></i>
		</p>
	);
};

export default Comment;
