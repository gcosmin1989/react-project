import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
	constructor(props) {
		super(props);
		this.setState = {};
	}
	render() {
		return (
			<div>
				<h2>Postari:</h2>
				{this.props.posts.map((post) => {
					return <PostItem userId={post.userId} title={post.title} body={post.body} key={post.id} />;
				})}
			</div>
		);
	}
}

export default PostList;
