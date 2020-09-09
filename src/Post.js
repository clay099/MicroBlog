import React, { useState, useEffect } from "react";
import BlogForm from "./BlogForm";
import "./Post.css";

const Post = ({ post, setPosts }) => {
	const [edit, setEdit] = useState(false);
	let { title, description, body, id } = post[0];

	const handleDelete = () => {
		setPosts((posts) => posts.filter((post) => post.id !== id));
	};

	const handleEdit = () => {
		setEdit(true);
	};

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
		</div>
	);

	if (edit) {
    
		postData = (
			<>
				<h5>Edit Post</h5>
				<BlogForm
					setPosts={setPosts}
					id={id}
					edit={edit}
					setEdit={setEdit}
					INITIAL_STATE={post[0]}
				/>
			</>
		);
	}

	return postData;
};

export default Post;