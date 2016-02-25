Home = React.createClass({
  // mixins: [ReactMeteorData],

  componentDidMount(){
    $('.ui.sidebar').sidebar({
        transition: 'overlay'
    });

   },

  showNav(){
     $('.ui.sidebar')
       .sidebar('toggle')
   },

  render(){
    return(
      <div claccName="home-feature">
        <div className="ui right demo vertical inverted sidebar labeled icon menu">
          <a className="item">
            SIGN UP
          </a>
          <a className="item" href="#introSegment">
            HOME
          </a>
          <a className="item" href="#whatAdaSegment">
            ADACODE.IO
          </a>
          <a className="item" href="#courseSegment">
            COURSES
          </a>
          <a className="item" href="#aboutUsSegment">
            ABOUT US
          </a>
          <a className="item" href="#contactSegment">
            CONTACT US
          </a>
        </div>
        <div className="pusher">
          <Intro />
          <WhatAda />
          <Course />
          <AboutUs />
          <ContactUs />
          <Footer />
        </div>

      </div>
    )
  }

})
