import React from "react";
import "./Summary.css";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Summary = ({ post }) => {
	const { title, description, id } = post;
	return (
		<div className="Summary">
			<Card>
				<CardBody>
					<CardTitle>
						<Link to={`/${id}`}>{title}</Link>
					</CardTitle>
					<CardText>{description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default Summary;
