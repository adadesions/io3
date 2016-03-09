School = React.createClass({
  render(){
    return(
      <div className="school-blog">
        <NavigatorSchool />
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <div className="section">
                <a href="/school/path">
                  <div className="card-panel orange darken-2 js-item">
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
                    <div className="card-panel cyan accent-1">
                      <span className="white-text">
                        <h1>JS</h1>
                        <h4>Javascript</h4>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="col s12 m4">
                  <a href="#">
                    <div className="card-panel cyan accent-1">
                      <span className="white-text">
                        <h1>JS</h1>
                        <h4>Javascript</h4>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="col s12 m4">
                  <a href="#">
                    <div className="card-panel cyan accent-1">
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
                  <div className="card-panel cyan accent-1">
                    <span className="white-text">
                      <h1>EP</h1>
                      <h4>English for Programer</h4>
                    </span>
                  </div>
                </a>
                <a href="#">
                  <div className="card-panel orange lighten-2 semantic-item">
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
