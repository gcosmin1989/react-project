import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			salary: '',
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
	handlerSalaryChange(event) {
		const inputValue = event.target.value;
		this.setState({ salary: inputValue });
	}
	handlerIsGoldClientChange(event) {
		const inputValue = event.target.checked;
		this.setState({ isGoldClient: inputValue });
	}
	handlerFormSubmit(event) {
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			salary: this.state.salary,
			isGoldClient: this.state.isGoldClient
		};
		this.props.updateUsersList(newUser);

		event.preventDefault();
		this.setState({
			name: '',
			email: '',
			salary: '',
			isGoldClient: false
		});
	}
	render() {
		return (
			<form
				className="user-add-form"
				onSubmit={(event) => {
					if (this.state.name === '') {
						alert('⚠ Please fill NAME Field ⚠ ');
						return false;
					} else if (!this.state.name.match(/^[a-zA-Z]+$/)) {
						alert('⚠ Name must contain only letters ⚠ ');
						return false;
					} else if (this.state.email === '') {
						alert('⚠ Please fill EMAIL Field ⚠ ');
						return false;
					} else if (this.state.salary === '') {
						alert('⚠ Please fill SALARY Field ⚠ ');
						return false;
					} else if (!this.state.salary.match(/^[0-9]*$/)) {
						alert('⚠ SALARY must be numerical value ⚠ ');
						return false;
					} else {
						this.handlerFormSubmit(event);
					}
				}}
			>
				<div className="title">Add New Usser:</div>
				<div className="input-container ic1">
					<label className="placeholder" htmlFor="name">
						Name:
					</label>
					<input
						className="input"
						type="text"
						name="name"
						value={this.state.name}
						onChange={(event) => {
							this.handlerNameChange(event);
						}}
					/>
				</div>
				<div className="input-container ic1">
					<label className="placeholder" htmlFor="email">
						Email
					</label>
					<input
						className="input"
						type="email"
						name="email"
						value={this.state.email}
						onChange={(event) => {
							this.handlerEmailChange(event);
						}}
					/>
				</div>
				<div className="input-container ic1">
					<label className="placeholder" htmlFor="salary">
						Salary
					</label>
					<input
						className="input"
						type="text"
						name="salary"
						value={this.state.salary}
						onChange={(event) => {
							this.handlerSalaryChange(event);
						}}
					/>
				</div>
				<div className="gold-check">
					<label htmlFor="gold-client">Gold Client?</label>
					<input
						type="checkbox"
						name="gold-client"
						checked={this.state.isGoldClient}
						onChange={(event) => {
							this.handlerIsGoldClientChange(event);
						}}
					/>
				</div>
				<button type="submit" className="submit">
					Add User
				</button>
			</form>
		);
	}
}

export default UserAddForm;
