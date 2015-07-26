var MenuBanner = React.createClass({
	render: function() {
		return ( 	
      <div className="top-banner">
        <div className="container">
          <nav className="navbar top-navbar ">
            <div className="container-fluid">
              <div className="navbar-header" id="header">
                <a className="navbar-brand logo" id="brand" href="#">
                  <img src={this.props.logoSrc} />
                </a>
              </div>
              <ul className="nav navbar-nav navbar-right menu-links">
                <li><a href="#">About Yi</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li> 
                <li><a href="#">Contact</a></li>              
              </ul>
            </div>
          </nav>
        </div>
      </div>
		);
	}
});

var MainImage = React.createClass({
  render: function() {
    return (
      <div id="main-img">
        <p className="container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excephjkteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <hr/>
      </div>
    );
  }
});

var ShowPortfolio = React.createClass({
  render: function() {
    return (
      <div className="showPortfolio">
        <div className="container ">
          <p>Interested in what work I have done? Below is a list of few projects that I have worked on and proud of.</p>
        </div>
        <section className="projects">
            <div className="container"> 
              <div className="row">

                <div className="col-md-4">
                  <div className="thumbnail project-thumb">
                    <img src={this.props.thumbNail1} alt="..." />
                    <div className="caption">
                      <h3>Thumbnail label</h3>
                      <p>...</p>
                    </div>
                  </div>
                </div>

                 <div className="col-md-4">
                  <div className="thumbnail project-thumb">
                    <img src={this.props.thumbNail2} alt="..." />
                    <div className="caption">
                      <h3>Thumbnail label</h3>
                      <p>...</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="thumbnail project-thumb">
                    <img src={this.props.thumbNail3} alt="..." />
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
        <MenuBanner logoSrc={this.props.logoSrc}/>
        <MainImage />
        <ShowPortfolio thumbNail1={this.props.thumbNail1} thumbNail2={this.props.thumbNail2} thumbNail3={this.props.thumbNail3} />
        <BlogList blogs={this.props.blogs}/>
        <Contact />
      </div>
    )
  }
})

