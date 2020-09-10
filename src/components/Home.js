import React, { useEffect } from "react";
import Summary from "./Summary";
import { CardDeck } from "reactstrap";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getAllPosts } from "../actions/actions";

const Home = () => {
	// const posts = useSelector((st) => st.posts, shallowEqual);
	const titles = useSelector((st) => st.titles, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPosts());
	}, [dispatch]);

	if (Object.keys(titles).length === 0) {
		return <p>Loading...</p>;
	}

	return (
		<CardDeck>
			{Object.keys(titles).map((id) => {
				let post = titles[id];
				return <Summary key={id} post={post} id={id} />;
			})}
		</CardDeck>
	);
};

export default Home;
