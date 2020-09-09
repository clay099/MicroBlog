import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Post from "./Post";

const PostCheck = ({ posts, setPosts }) => {
	let { id } = useParams();
	const post = posts.filter((p) => {
		id = +id;
		return p.id === id;
	});

	if (post.length === 0) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<Post post={post} setPosts={setPosts} />
		</div>
	);
};

export default PostCheck;
