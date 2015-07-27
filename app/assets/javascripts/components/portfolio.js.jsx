var MainImage = React.createClass({
  render: function() {
    return (
      <div id="yi">
        <div className="container jumbotron intro">
          <h1>Full Stack Rails Web Developer</h1>
          <p>
             Specializing in Ruby, Ruby on Rails, Sinatra, HTML5/CSS3, Javascript, <br/>
             React on Rails, and Responsive Design
          </p>
          <button type="button" className="btn btn-success">
            <a href="#contact">Get in Touch</a>
          </button>
        </div>
      </div>
    );
  }
});

var ShowPortfolio = React.createClass({
  render: function() {
    return (
      <div className="showPortfolio" id="portfolio">
        <div className="container ">
          <p>Interested in what work I have done? <br />
          Below is a list of few projects that I have worked on </p>
        </div>
        <section className="projects">
            <div className="container"> 
              <div className="row">

                <div className="col-md-4">
                  <div className="thumbnail project-thumb">
                    <img src={this.props.thumbNail1} />
                    <div className="caption">
                      <h3>Thumbnail label</h3>
                      <p>...</p>
                    </div>
                  </div>
                </div>

                 <div className="col-md-4">
                  <div className="thumbnail project-thumb">
                    <img src={this.props.thumbNail2} />
                    <div className="caption">
                      <h3>Thumbnail label</h3>
                      <p>...</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="thumbnail project-thumb">
                    <img src={this.props.thumbNail3} />
                    <div className="caption">
                      <h3>Thumbnail label</h3>
                      <p>...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>  
      </div>

    );
  }
})

var PortfolioPage = React.createClass({
  render: function(){
    return (
      <div className="portfolioPage">
        <MainImage profilePic={this.props.profilePic}/>
        <ShowPortfolio thumbNail1={this.props.thumbNail1} thumbNail2={this.props.thumbNail2} thumbNail3={this.props.thumbNail3} />
        <BlogList blogs={this.props.blogs}/>
        <br />
        <div className="container">
          <p><a href="/blogs">See all blogs >> </a></p>
        </div>
        <Contact gmailIcon={this.props.gmailIcon} twitterIcon={this.props.twitterIcon} githubIcon={this.props.githubIcon} />
        <Footer />
      </div>
    )
  }
})

