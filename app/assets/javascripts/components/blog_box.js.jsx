var BlogBox = React.createClass({
	getInitialState: function () {
		return JSON.parse(this.props.presenting);
	},

	handleBlogSubmit: function (formData, action) {
		$.ajax({
			data: formData,
			url: action,
			type: "POST",
			dataType: "json", 
			success: function (data) {
				this.setState({blogs: data});
			}.bind(this)
		});
	},

	render: function () {
		return (
			<div className="blog-box">
				<div className="container">
					<h2>New Blog</h2>
					<BlogForm form={this.state.form} onBlogSubmit={this.handleBlogSubmit} />
					</div>
				<BlogList blogs={this.state.blogs} />
			</div>
		);
	}	
});