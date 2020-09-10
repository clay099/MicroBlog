import React from "react";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./NavBar";
import Jumbo from "./Jumbo";
import { Container } from "reactstrap";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Container>
				<Jumbo />
				<Routes />
			</Container>
		</div>
	);
}

export default App;
