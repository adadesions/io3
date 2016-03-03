Course = React.createClass({

  componentDidMount(){

    $('#courseSegment').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    })

  },


  render(){
    return(
      <div id="Course" className="course-segment">
        <div className="content-course">
          <div className="icon-play">
            <a href="#courseSegment"><img src="/images/course/course-play-button.png"/></a>
          </div>
          <div className="text-course">
              <h1>COURSES</h1>
              <h3>

              </h3>
              <button className="ui button learn-more-button"><h3>Coming Soon</h3></button>
          </div>
        </div>
      </div>
    )
  }
})
