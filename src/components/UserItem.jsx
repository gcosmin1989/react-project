import React from 'react';

function UserItem(props) {
	const { name, email, salariu, isGoldClient } = props;

	return (
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
			<p>{salariu}</p>
			<div>
				{isGoldClient ? (
					<p>
						Client <b>GOLD</b>
					</p>
				) : (
					<p>Nu e gold</p>
				)}
				<br />
				{/* <img src={img} alt="poza" /> */}
			</div>
		</div>
	);
}
export default UserItem;
