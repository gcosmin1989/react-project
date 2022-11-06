import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
	//const { users } = props;
	constructor(props) {
		super(props);
		this.setState = {};
	}
	render() {
		return (
			<div>
				<h2>Lista Utilizatori:</h2>
				{this.props.users.map((user, index) => {
					return (
						<UserItem
							name={user.name}
							email={user.email}
							isGoldClient={user.isGoldClient}
							salariu={user.salariu}
							img={user.img}
							key={index}
						/>
					);
				})}
			</div>
		);
	}
}

export default UserList;
