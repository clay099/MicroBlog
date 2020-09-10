import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div>
			<Navbar color="dark" light expand="md">
				<Nav className="mr-auto" navbar>
					<NavLink exact to="/">
						Home
					</NavLink>
					<NavLink exact to="/new">
						New Post
					</NavLink>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavBar;
