import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h2>IP Address Tracker</h2>
					<input
						type="text"
						placeholder="Search for any IP Address or Domain"
					></input>
				</header>
			</div>
		);
	}
}

export default App;
