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
                <li><a href="#yi">Main</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blog">Blog</a></li> 
                <li><a href="#contact">Contact</a></li>              
              </ul>
            </div>
          </nav>
        </div>
      </div>
		);
	}
});