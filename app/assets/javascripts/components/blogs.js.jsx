var Blog = React.createClass({
	render: function() {
		return (
			<div className="blog">
				<h3><a href= {this.props.id} >{this.props.title}</a></h3>
				<p>Written on {this.props.created_at}</p>
				<p>{this.props.content}</p>
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

			<div className="blogNodes">
				<h2>Most Recent Blogs</h2>
				{blogNodes}
			</div>
		);
	}
});

