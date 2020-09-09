import React from "react";
import Summary from "./Summary";
import { CardDeck } from "reactstrap";

const Home = ({ posts }) => {
	if (posts.length === 0) {
		return <p>Add a post</p>;
	}
	return (
		<CardDeck>
			{posts.map((post) => (
				<Summary key={post.id} post={post} />
			))}
		</CardDeck>
	);
};

export default Home;
