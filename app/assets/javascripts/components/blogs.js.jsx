var Blog = React.createClass({
	render: function() {
		var id = this.props.id.toString()
		var blogIdPath = "/blogs/" + id
		return (
			<div className="blog">
				<h3>{this.props.title}</h3>
				<p><span className="written">Written on</span> {this.props.created_at}</p>
				<p className="content">{this.props.content}</p>
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
			return (
				<Blog title={blog.title} created_at={blog.created_at} content={blog.content} id={blog.id} key={blog.id}/>
			)
		});
		return (
			<div className="container" id="blog">
				<div className="blogNodes" >
					<h2>Recent Blogs</h2>
					{blogNodes.reverse()}
				</div>
			</div>
		);
	}
});



