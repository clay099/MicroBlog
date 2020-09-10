import {
	UPDATE_POST,
	REMOVE_POST,
	UPDATE_COMMENT,
	REMOVE_COMMENT,
	GET_POSTS,
	GET_COMMENTS,
	VOTE,
} from "./actionTypes";

import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

const getAllPosts = () => {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(`${API_URL}/`);
			dispatch(showAllPosts(data));
		} catch (e) {
			console.log(e);
		}
	};
};

const showAllPosts = (data) => {
	return {
		type: GET_POSTS,
		data,
	};
};

const getPost = (id) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(`${API_URL}/${id}`);
			dispatch(updatePost(data));
		} catch (e) {
			console.log(e);
		}
	};
};

const addDatabasePost = ({ title, description, body }) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.post(`${API_URL}/`, {
				title,
				description,
				body,
			});
			dispatch(updatePost(data));
		} catch (e) {
			console.log(e);
		}
	};
};

const updateDatabasePost = ({ title, description, body, id }) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.put(`${API_URL}/${id}`, {
				title,
				description,
				body,
			});
			dispatch(updatePost(data));
		} catch (e) {
			console.log(e);
		}
	};
};

const updatePost = ({ title, description, body, id }) => ({
	type: UPDATE_POST,
	id,
	title,
	description,
	body,
});

const removeDatabasePost = (id) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.delete(`${API_URL}/${id}`);
			if (data.message === "deleted") {
				dispatch(removePost(id));
			}
		} catch (e) {
			console.log(e);
		}
	};
};

const removePost = (id) => ({ type: REMOVE_POST, id });

const getComments = (id) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(`${API_URL}/${id}/comments`);
			dispatch(showAllComments({ postId: id, comments: data }));
		} catch (e) {
			console.log(e);
		}
	};
};

const showAllComments = (data) => {
	return {
		type: GET_COMMENTS,
		data,
	};
};
const addDatabaseComment = ({ postId, comment }) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.post(`${API_URL}/${postId}/comments`, {
				text: comment,
			});
			dispatch(updateComment({ ...data, postId }));
		} catch (e) {
			console.log(e);
		}
	};
};

const updateComment = ({ postId, text: comment, id: commentId }) => {
	return {
		type: UPDATE_COMMENT,
		commentId,
		comment,
		postId,
	};
};

const removeDatabaseComment = ({ commentId, postId }) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.delete(
				`${API_URL}/${postId}/comments/${commentId}`
			);
			if (data.message === "deleted") {
				dispatch(removeComment({ commentId, postId }));
			}
		} catch (e) {
			console.log(e);
		}
	};
};

const removeComment = ({ commentId, postId }) => ({
	type: REMOVE_COMMENT,
	commentId,
	postId,
});

const voteDatabase = ({ id, direction }) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.post(
				`${API_URL}/${id}/vote/${direction}`
			);
			dispatch(vote({ id, votes: data.votes }));
		} catch (e) {
			console.log(e);
		}
	};
};

const vote = ({ id, votes }) => ({
	type: VOTE,
	id,
	votes,
});

export {
	getAllPosts,
	getPost,
	addDatabasePost,
	updateDatabasePost,
	removeDatabasePost,
	getComments,
	addDatabaseComment,
	removeDatabaseComment,
	voteDatabase,
};
