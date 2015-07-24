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
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About Yi</a></li>
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
        <img src={this.props.mainImgSrc}/>
      </div>
    );
  }
});

var PortfolioPage = React.createClass({
  render: function(){
    return (
      <div className="portfolioPage">
        <MenuBanner logoSrc={this.props.logoSrc}/>
        <MainImage mainImgSrc={this.props.mainImgSrc}/>
      </div>
    )
  }
})

