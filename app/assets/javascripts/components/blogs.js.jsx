var Blog = React.createClass({
	render: function() {
		var id = this.props.id.toString()
		var blogIdPath = "/blogs/" + id
		return (
			<div className="blog">
				<h3>{this.props.title}</h3>
				<p>Written on {this.props.created_at}</p>
				<p>{this.props.content}</p>
					<button className="blogShowPath">
				<a href={blogIdPath}>Read More</a>
				</button>
			</div>
		);
	}
});

var BlogList = React.createClass({
	render: function() {
		var blogNodes = this.props.blogs.map(function (blog) {
			return <Blog title={blog.title} created_at={blog.created_at} content={blog.content} id={blog.id}/>
		});

		return (
			<div className="container">
				<div className="blogNodes">
					<h2>Recent Blogs</h2>
					{blogNodes}
				</div>
			</div>
		);
	}
});



