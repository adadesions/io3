Home = React.createClass({
  // mixins: [ReactMeteorData],

  render(){
    return(
      <div className="home-feature">
        <Navigator />
        <div className="pusher">
          <Intro />
          <WhatAda />
          <Course />
          <AboutUs />
          <Partner />
          <Footer />
        </div>
      </div>
      )
  }

})
