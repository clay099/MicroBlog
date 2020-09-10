import {
	UPDATE_POST,
	REMOVE_POST,
	UPDATE_COMMENT,
	REMOVE_COMMENT,
} from "./actionTypes";

export const updatePost = ({ title, description, body, id = false }) => ({
	type: UPDATE_POST,
	id,
	title,
	description,
	body,
});
export const removePost = (id) => ({ type: REMOVE_POST, id });

export const updateComment = ({ postId, comment, commentId = false }) => ({
	type: UPDATE_COMMENT,
	commentId,
	comment,
	postId,
});

export const removeComment = ({ commentId, postId }) => ({
	type: REMOVE_COMMENT,
	commentId,
	postId,
});
