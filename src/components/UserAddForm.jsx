import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			isGoldClient: false
		};
	}
	handlerNameChange(event) {
		const inputValue = event.target.value;
		this.setState({ name: inputValue });
	}
	handlerEmailChange(event) {
		const inputValue = event.target.value;
		this.setState({ email: inputValue });
	}
	handlerIsGoldClientChange(event) {
		const inputValue = event.target.checked;
		this.setState({ isGoldClient: inputValue });
	}
	handlerFormSubmit(event) {
		event.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			isGoldClient: this.state.isGoldClient
		};
		this.props.updateUsersList(newUser);
		console.log(newUser);
	}
	render() {
		return (
			<form
				className="user-add-form"
				onSubmit={(event) => {
					this.handlerFormSubmit(event);
				}}
			>
				<h2>Adauga utilizator nou:</h2>
				<label htmlFor="name">Nume:</label>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={(event) => {
						this.handlerNameChange(event);
					}}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					value={this.state.email}
					onChange={(event) => {
						this.handlerEmailChange(event);
					}}
				/>

				<label htmlFor="gold-client">E client Gold?</label>
				<input
					type="checkbox"
					name="gold-client"
					checked={this.state.isGoldClient}
					onChange={(event) => {
						this.handlerIsGoldClientChange(event);
					}}
				/>

				<button type="submit">Adauga Utilizator</button>
			</form>
		);
	}
}

export default UserAddForm;
