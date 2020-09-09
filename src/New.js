import React from "react";
import BlogForm from "./BlogForm";

const New = ({ setPosts, id, setId }) => {
	return (
		<>
			<h5>New Post</h5>
			<BlogForm setPosts={setPosts} id={id} setId={setId} />
		</>
	);
};

export default New;
