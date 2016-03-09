Player = React.createClass({


  render(){
    return(
      <div className="school-player-segment">
        <NavigatorSchool />
        <div className="school-player">
          <div class="video-container">
            <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div className="school-player-name">
          <h2>
            Javascript Level 1 Part 1
          </h2>
        </div>
      </div>
    )
  }
})
