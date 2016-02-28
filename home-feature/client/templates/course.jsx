Course = React.createClass({

  componentDidMount(){

  },


  render(){
    return(
      <div id="courseSegment" className="course-segment">
        <div className="content-course">
          <div className="icon-play">
            <a href="#"><img src="/images/course/course-play-button.png"/></a>
          </div>
          <div className="text-course">
              <h1>COURSES</h1>
              <h3>
              adacode adacode adacode<br/>
              adacode adacode adacode adacode<br/>
              adacode adacode adacode adacode<br/>
              adacode adacode adacode
              </h3>
              <button className="ui button learn-more-button"><h3>LEARN MORE</h3></button>
          </div>
        </div>
      </div>
    )
  }
})
