import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';

class SiteContent extends Component {
	render() {
		return (
			<div>
				{/* <Switch>
                <Route path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/not-found' component={NotFound} />
                <Redirect from='/posts' to='/counter' />
                <Redirect to='/not-found' />
            </Switch> */}
			</div>
		);
	}
}

export default SiteContent;
