School = React.createClass({

  componentDidMount(){
    $('#courseOne').hover(function(){
      $('#courseOne').toggleClass('z-depth-4')
    }),

    $('#courseTwo').hover(function(){
      $('#courseTwo').toggleClass('z-depth-4')
    }),

    $('#courseThree').hover(function(){
      $('#courseThree').toggleClass('z-depth-4')
    }),

    $('#courseFour').hover(function(){
      $('#courseFour').toggleClass('z-depth-4')
    }),

    $('#courseFive').hover(function(){
      $('#courseFive').toggleClass('z-depth-4')
    }),

    $('#courseSix').hover(function(){
      $('#courseSix').toggleClass('z-depth-4')
    })
  },

  render(){
    return(
      <div className="school-blog">
        <NavigatorSchool />
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <div className="section">
                <a href="/school/path">
                  <div id="courseOne" className="card-panel grey darken-1 js-item">
                    <span className="white-text">
                      <h1>JS</h1>
                      <h4>Javascript</h4>
                    </span>
                  </div>
                </a>
              </div>
              <div className="section">
                <div className="col s12 m4">
                  <a href="#">
                    <div id="courseTwo" className="card-panel grey darken-1">
                      <span className="white-text">
                        <h1>JS</h1>
                        <h4>Javascript</h4>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="col s12 m4">
                  <a href="#">
                    <div id="courseThree" className="card-panel grey darken-1">
                      <span className="white-text">
                        <h1>JS</h1>
                        <h4>Javascript</h4>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="col s12 m4">
                  <a href="#">
                    <div id="courseFour" className="card-panel grey darken-1">
                      <span className="white-text">
                        <h1>JS</h1>
                        <h4>Javascript</h4>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="section">
                <a href="#">
                  <div id="courseFive" className="card-panel grey darken-1">
                    <span className="white-text">
                      <h1>EP</h1>
                      <h4>English for Programer</h4>
                    </span>
                  </div>
                </a>
                <a href="#">
                  <div id="courseSix" className="card-panel grey darken-1 semantic-item">
                    <span className="white-text">
                      <h1>S</h1>
                      <h4>Semantic User Interface</h4>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
