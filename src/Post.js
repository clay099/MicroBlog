import React, { useState } from "react";
import BlogForm from "./BlogForm";
import "./Post.css";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { removePost } from "./actions";
import { useDispatch } from "react-redux";

const Post = ({ post, id }) => {
	const [edit, setEdit] = useState(false);
	let { title, description, body } = post;

	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(removePost(id));
	};

	const handleEdit = () => {
		setEdit(true);
	};

	let commentData = (
		<>
			<hr />
			<h4 className="display-5 Comments">Comments</h4>
			<Comments id={id} />
			<CommentForm id={id} />
		</>
	);

	title = title.charAt(0).toUpperCase() + title.slice(1);

	let postData = (
		<div className="Post">
			<div className="Post-top-line">
				<h2 className="display-3">{title}</h2>
				<span>
					<i className="fas fa-edit" onClick={handleEdit}></i>
					<i className="fas fa-backspace" onClick={handleDelete}></i>
				</span>
			</div>
			<p>
				<i>{description}</i>
			</p>
			<p>{body}</p>
			{commentData}
		</div>
	);

	if (edit) {
		postData = (
			<>
				<h5>Edit Post</h5>
				<BlogForm id={id} edit={edit} setEdit={setEdit} />
			</>
		);
	}

	return postData;
};

export default Post;
