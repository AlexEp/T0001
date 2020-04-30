import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';

import NotFound from './screens/NotFound';
import Home from './screens/Home';
import Word from './screens/Word';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/word/:id" component={Word} />
				<Route path="/not-found" component={NotFound} />

				<Redirect to="/not-found" />
			</Switch>
		</div>
	);
}

export default App;
