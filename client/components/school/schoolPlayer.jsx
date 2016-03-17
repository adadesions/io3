Player = React.createClass({

  componentDidMount(){
    $( document ).ready(function() {
      Materialize.fadeInImage('.school-player')
    })
  },

  render(){
    return(
      <div className="school-player-segment">
        <div className="section">
          <NavigatorSchool />
          <div className="school-player-name">
            <h2>
              Javascript Level 1 Part 1
            </h2>
            <div className="school-player">
              <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
