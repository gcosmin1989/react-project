import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.setState = {};
	}
	render() {
		return (
			<div>
				<h2>Users List:</h2>
				{this.props.users.map((user, index) => {
					return (
						<UserItem
							name={user.name}
							email={user.email}
							isGoldClient={user.isGoldClient}
							salary={user.salary}
							img={user.img}
							key={index}
							deleteHandler={() => {
								this.props.deleteHandler(index);
							}}
						/>
					);
				})}
			</div>
		);
	}
}

export default UserList;
