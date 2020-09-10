import React from "react";
import Summary from "./Summary";
import { CardDeck } from "reactstrap";
import { useSelector } from "react-redux";

const Home = () => {
	const posts = useSelector((st) => st.posts);
	if (Object.keys(posts).length === 0) {
		return <p>Add a post</p>;
	}
	return (
		<CardDeck>
			{Object.keys(posts).map((id) => {
				let post = posts[id];
				return <Summary key={id} post={post} id={id} />;
			})}
			{/* {posts.map((post) => (
				<Summary key={post.id} post={post} />
			))} */}
		</CardDeck>
	);
};

export default Home;
