RecommendedCourse = React.createClass({


  render(){
    return(
      <div className="container">
        <div className="col s12 m12 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="images/school/course-item/meteor.png"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Meteor<i className="material-icons right">more_vert</i></span>
              <p><a href="/school/path">Let's Rock!!!</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="images/school/course-item/s.png"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Semantic<i className="material-icons right">more_vert</i></span>
              <p><a href="#">Let's Rock!!!</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="images/school/course-item/react-js.png"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">React<i className="material-icons right">more_vert</i></span>
              <p><a href="#">Let's Rock!!!</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>
    </div>
    )
  }
})
