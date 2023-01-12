import React from 'react';
import './UserItem.css';

function UserItem(props) {
	const { name, email, salary, avatar, isGoldClient, img } = props;

	return (
		<div className="card">
			{<img src={img} alt="poza" />}
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
				<p>{salary}</p>
				<p>{avatar}</p>
				<div>
					{isGoldClient ? (
						<p>
							Client <b>GOLD</b>🏆
						</p>
					) : (
						<p>Nu e gold</p>
					)}
				</div>

				<button
					className="deleteButton"
					type="submit"
					texxt
					id={props.name}
					onClick={(event) => {
						event.preventDefault();
						props.deleteHandler();
					}}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
export default UserItem;
