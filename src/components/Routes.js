import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import New from "./New";
import PostCheck from "./PostCheck";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/new">
				<New />
			</Route>
			<Route exact path="/:id">
				<PostCheck />
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
