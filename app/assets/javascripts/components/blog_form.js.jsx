var BlogForm = React.createClass({
	handleSubmit: function(event) {
		event.preventDefault();

		var title = this.refs.title.getDOMNode().value.trim();
		var content = this.refs.content.getDOMNode().value.trim();

		//To validate
		if (!title || !content) {
			alert("You are missing a title or have not added any blog content!");
		}

		//To submit the form
		var formData = $(this.refs.form.getDOMNode()).serialize();
		this.props.onBlogSubmit(formData, this.props.form.action);

		this.refs.title.getDOMNode().value = "";
    	this.refs.content.getDOMNode().value = "";
	},

	render: function() {
		return (
			<form ref="form" className="blog-form" action={this.props.form.action} acceptCharset="UTF-8" method="post" onSubmit={this.handleSubmit}>
				<p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
				<p><input ref="title" name="blog[title]" placeholder="Blog Title" /></p>
				<p><textarea ref="content" className="form-control" rows="10" name="blog[content]" placeholder="Post content" /></p>
        		<p><button type="submit">Post blog</button></p>
			</form>   
		);
	}
});

