var ShowBlog = React.createClass({
	render: function() {
		return (
			<div className="blog">
				<h2>{this.props.blog.title}</h2>
				<p>hi on {this.props.blog.created_at}</p>
				<p>{this.props.blog.content}</p>
			</div>
		);
	}
})