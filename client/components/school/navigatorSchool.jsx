NavigatorSchool = React.createClass({

  render(){
    return(
      <div className="nav-school">
        <div className="section">
          <div className="container">
            <nav id="nav" className="nav">
              <button className="menu">
                <em className="hamburger"></em>
              </button>
              <div className="brand">
                <a href="#"><img src="/images/intro/adacode-home-logo.png"/></a>
              </div>
              <ul className="navbar">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})
