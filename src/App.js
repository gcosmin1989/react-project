import React from 'react';
import './App.css';
import './index.css';
import UserAddForm from './components/UserAddForm';
import UserList from './components/UserList';
import { usersJSON } from './components/UsersDB';
import PostList from './components/PostList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			background: '#d0fbf6',
			color: 'black',
			users: usersJSON,
			posts: []
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((postList) => {
			this.setState({ posts: postList });
		});
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
		this.setState((previousState) => {
			return {
				users: [ user, ...previousState.users ]
			};
		});
	}
	deleteHandler(index) {
		this.setState((prevState) => {
			prevState.users.splice(index, 1);
			return { users: [ ...prevState.users ] };
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

				<div>
					<h2>Change Color</h2>
					<div>
						<input type="color" onChange={(event) => this.handleBackgroundChange(event)} />
						<label> Background Color</label>

						<input type="color" onChange={(event) => this.handlerTextColor(event)} />
						<label> Text Color</label>
					</div>
					<div className="column right">
						<div className="show-buttons">
							<button
								className="submitBtn"
								type="submit"
								name="Users"
								onClick={() => {
									this.setState({ list: 'users' });
								}}
							>
								{' '}
								Show Users
							</button>
							<button
								className="submitBtn"
								type="submit"
								name="Posts"
								onClick={() => {
									this.setState({ list: 'posts' });
								}}
							>
								{' '}
								Show Posts
							</button>
						</div>

						{this.state.list === 'posts' ? (
							<PostList posts={this.state.posts} />
						) : (
							<UserList
								users={this.state.users}
								deleteHandler={(event) => {
									this.deleteHandler(event);
								}}
							/>
						)}
					</div>
					{/* <UserList users={this.state.users} />

					<PostList posts={this.state.posts} /> */}
				</div>
			</div>
		);
	}
}

export default App;
