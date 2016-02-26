Intro = React.createClass({

  componentDidMount(){
    videojs('vdo-bg').ready(function() {
      this.play();
    }),

    $('.ui.sidebar').sidebar({
        transition: 'overlay',
        dimPage: false,
    }),


  	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  		$(this).toggleClass('open');
      $('.ui.sidebar')
        .sidebar('toggle')
      $('#navBar').toggleClass('nav-button-after')

  	})

    // $('.intro-segment').click(function(){
    //   $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
    //   $('.nav-bar').removeClass('nav-button-after')
    // })
  },

  // showNav(){
  //   $('.nav-bar').ready(function(){
  //   	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  //   		$(this).toggleClass('open');
  //       $('.ui.sidebar')
  //         .sidebar('toggle')
  //   	})
  //   })
  //  },


  render(){
    return(
      <div id="introSegment" className="intro-segment">
          <video id="vdo-bg" poster="poster.png" loop data-setup='{"autoplay": true}'>
             <source src="/videos/intro/intro-test-1.webm" type="video/webm"/>
             <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
          </video>
          <div className="nav-bar-fixed">
            <div id="navBar">
              <div className="nav-button">
                <div id="nav-icon2">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="logo">
            <img src="/images/intro/adacode-home-logo-grow.png"/>
          </div>
          <div className="content-intro">
            <h3>SCHOOL . BUILD . INNOVATION</h3>
          </div>

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
        </div>
    )
  }
})
