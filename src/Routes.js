import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import New from "./New";
import PostCheck from "./PostCheck";

const Routes = ({ posts, setPosts, id, setId }) => {
	return (
		<Switch>
			<Route exact path="/new">
				<New posts={posts} setPosts={setPosts} id={id} setId={setId} />
			</Route>
			<Route exact path="/:id">
				<PostCheck posts={posts} setPosts={setPosts} />
			</Route>
			<Route exact path="/">
				<Home posts={posts} />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
