import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPost } from "../actions/actions";

const PostCheck = () => {
	let { id } = useParams();
	const posts = useSelector((st) => st.posts, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPost(id));
	}, [dispatch, id]);

	const post = posts[+id];

	if (post === undefined) {
		return <p>loading...</p>;
	}

	return (
		<div>
			<Post post={post} id={id} />
		</div>
	);
};

export default PostCheck;
