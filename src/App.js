import React, { useState } from "react";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./NavBar";
import Jumbo from "./Jumbo";
import { Container } from "reactstrap";

function App() {
	const [posts, setPosts] = useState([]);
	const [id, setId] = useState(1);

	return (
		<div className="App">
			<NavBar />
			<Container>
				<Jumbo />
				<Routes
					posts={posts}
					setPosts={setPosts}
					id={id}
					setId={setId}
				/>
			</Container>
		</div>
	);
}

export default App;
