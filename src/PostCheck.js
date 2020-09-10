import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Post from "./Post";
import { useSelector } from "react-redux";

const PostCheck = () => {
	let { id } = useParams();
	const posts = useSelector((st) => st.posts);

	const post = posts[+id];

	if (post === undefined) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<Post post={post} id={id} />
		</div>
	);
};

export default PostCheck;
