import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Foot from "./components/Foot";
import "semantic-ui-css/semantic.min.css";
import "./styles/payor.css";
import "./styles/about.css";

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path='/' component={About} />
				<Route exact path='/about' component={About} />
			</Switch>
			<Foot />
		</Router>
	);
}

export default App;
