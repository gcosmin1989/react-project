import React from 'react';
import './App.css';
import './index.css';
import UserAddForm from './components/UserAddForm';
import UserList from './components/UserList';

// function App() {
// 	return <div className="App" />;
// }

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			background: 'white',
			color: 'black',
			users: []
		};
	}

	handleBackgroundChange(event) {
		const userBackground = event.target.value;

		this.setState({ background: userBackground });
	}
	handlerTextColor(event) {
		const textColor = event.target.value;

		this.setState({ color: textColor });
	}
	updateUsersList(user) {
		// this.setState({
		// 	users: [ ...this.state.users, user ]
		// });
		this.setState((previousState) => {
			return {
				users: [ ...previousState.users, user ]
			};
		});
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				//filtram datele venite de la API
				//astfel incat pe ecran sa fie afisati doar 3 useri
				//BONUS adaugati fiecarui user o propietate
				//numita "isGoldClient" cu valoarea true
				const filteredJson = json.filter((user) => user.id < 4);
				filteredJson.forEach((user) => {
					user.isGoldClient = true;
				});
				this.setState({ users: filteredJson });
			});
	}
	render() {
		//console.log(this.state);

		return (
			<div
				className="App"
				style={{
					background: this.state.background,
					color: this.state.color
				}}
			>
				<h1>Lista Utilizator</h1>
				<UserAddForm
					updateUsersList={(user) => {
						this.updateUsersList(user);
					}}
				/>
				{/* <UserItem
					name={this.state.users[0].name}
					email={this.state.users[0].email}
					isGoldClient={this.state.users[0].isGoldClient}
					salariu={this.state.users[0].salariu}
					img={this.state.users[0].img}
				/>
				<UserItem
					name={this.state.users[1].name}
					email={this.state.users[1].email}
					isGoldClient={this.state.users[1].isGoldClient}
					salariu={this.state.users[1].salariu}
					img={this.state.users[1].img}
				/> */}
				{console.log(this.state.background)}
				{this.state.background === '#000000' ? null : <UserList users={this.state.users} />}
				<input type="color" onChange={(event) => this.handleBackgroundChange(event)} />
				<input type="color" onChange={(event) => this.handlerTextColor(event)} />
			</div>
		);
	}
}

export default App;
