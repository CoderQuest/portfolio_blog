var Sub = React.createClass({
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
                <li><a href="/"> {'<<< Back to main page'} </a></li>              
              </ul>
            </div>
          </nav>
        </div>
      </div>
		);
	}
});