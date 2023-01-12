import React from 'react';
import './PostItem.css';
function PostItem(props) {
	const { id, title, body } = props;

	return (
		<div className="cardPosts">
			<p>{id}</p>
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	);
}
export default PostItem;
