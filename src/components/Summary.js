import React from "react";
import "./Summary.css";
import { Card, CardTitle, CardText, CardBody, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import Votes from "./Votes";

const Summary = ({ post, id }) => {
	const { title, description } = post;
	return (
		<div className="Summary">
			<Card>
				<CardBody>
					<CardTitle>
						<Link to={`/${id}`}>{title}</Link>
					</CardTitle>
					<CardText>{description}</CardText>
				</CardBody>
				<CardFooter>
					<Votes id={id} />
				</CardFooter>
			</Card>
		</div>
	);
};

export default Summary;
