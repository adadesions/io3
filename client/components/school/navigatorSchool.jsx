NavigatorSchool = React.createClass({

  componentDidMount(){


      $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'right' // Displays dropdown with edge aligned to the left of button
        }),

      $('.chip').hover(function(){
        $('.chip').toggleClass('chip-hover')
      })

  },

  render(){
    return(
      <div className="nav-school">
        <div className="section">
          <div className="container">
            <nav id="nav" className="nav">
              <div className="brand">
                <a href="#"><img src="/images/intro/adacode-home-logo.png"/></a>
              </div>
              <ul className="navbar">
                <li>
                  <div className="chip">
                    <img src="images/about/ceo.png"/>
                    Ada Kaminkure
                  </div>
                  <a className="dropdown-button" href="#" dataActivates='user-menu'><i className="medium material-icons">settings</i></a>
                    <ul id='user-menu' className='dropdown-content'>
                      <li><a href="#">Logout</a></li>
                    </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})
