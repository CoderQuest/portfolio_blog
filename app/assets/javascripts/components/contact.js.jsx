var Contact = React.createClass({
	render: function(){
		return (
			<div className="contact jumbotron" id="contact">
				<section className="container">
					<h2>Let's Chat!</h2>
					<p>Have any questions, projects that you want to partner up with? <br />		   
					   <a href="mailto:kren1221@gmail.com" className="social-link"> 
					   		<img src={this.props.gmailIcon} />
					   </a>
					   <a href="https://twitter.com/coderquest" target="_blank" className="social-link">
					   		<img src={this.props.twitterIcon}/>
					   </a>
					   <a href="https://github.com/CoderQuest" target="_blank" className="social-link">
					   		<img src={this.props.githubIcon}/>
					   </a>
					</p>
				</section>
			</div>
		)
	}
})


				
					
					
