import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';

import NotFound from './screens/NotFound';
import Home from './screens/Home';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" component={Home} />
				{/* 
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} /> */}
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		</div>
	);
}

export default App;
