Home = React.createClass({
  // mixins: [ReactMeteorData],

  render(){
    return(
      <div className="home-feature">
        <div className="pusher">
          <Intro />
          <WhatAda />
          <Course />
          <AboutUs />
          <Footer />
        </div>

      </div>
      )
  }

})
