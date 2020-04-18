import React, { Component } from 'react';
import NavBar from '../component/Navbar';

interface InnerPageProp {
	children: React.ReactNode;
}

class InnerPage extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<div className="mt-3">{this.props.children}</div>
			</React.Fragment>
		);
	}
}

export default InnerPage;
