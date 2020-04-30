import React, { Component } from 'react';
import { RouteComponentProps, match } from 'react-router';
import InnerPage from './InnerPage';

type Params = {
	id: string;
};

class Word extends Component<RouteComponentProps<Params>> {
	constructor(props: RouteComponentProps<Params>) {
		super(props);
	}

	render() {
		return <InnerPage>Word! {this.props.match.params.id}!!</InnerPage>;
	}
}

export default Word;
