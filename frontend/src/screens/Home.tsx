import React, { Component } from 'react';
import { RouteComponentProps, match } from 'react-router';
import InnerPage from './InnerPage';
import { HubConnectionBuilder, HubConnectionState, HubConnection } from '@aspnet/signalr';

class Home extends Component {
	constructor(props: RouteComponentProps) {
		super(props);
	}

	setSignalRConnection = async () => {
		const connection = new HubConnectionBuilder()
			.withUrl('http://localhost:56187/apphub')
			.withAutomaticReconnect([ 0, 3000, 5000, 10000, 15000, 30000 ])
			.build();

		connection.on('msg-event', (data) => {});

		try {
			await connection.start();

			if (connection.state === HubConnectionState.Connected) {
				await connection.invoke('Subscribe');
			}
		} catch (error) {
			console.error(error);
		}
	};

	componentDidMount = () => {
		this.setSignalRConnection();
	};

	render() {
		return <InnerPage>home! </InnerPage>;
	}
}

export default Home;
