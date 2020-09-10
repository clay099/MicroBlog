import React, { useEffect } from "react";
import Comment from "./Comment";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getComments } from "../actions/actions";

const Comments = ({ id }) => {
	const comments = useSelector((st) => st.comments[id], shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getComments(id));
	}, [dispatch, id]);

	if (comments === undefined) {
		return null;
	}

	return (
		<div className="Comments">
			{Object.keys(comments).map((commentId) => (
				<Comment
					key={commentId}
					comment={comments[commentId]}
					postId={id}
					commentId={commentId}
				/>
			))}
		</div>
	);
};

export default Comments;
