import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import "./Jumbo.css";

const Jumbo = () => {
	return (
		<div className="Jumbo">
			<Jumbotron>
				<h1 className="display-3">Microblog</h1>
				<p className="lead">Let's start blogging</p>
				<Link className="Jumbo-link" to="/">
					Blog
				</Link>
				<Link className="Jumbo-link" to="/new">
					Add a new post
				</Link>
			</Jumbotron>
		</div>
	);
};

export default Jumbo;
