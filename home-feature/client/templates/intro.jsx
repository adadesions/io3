Intro = React.createClass({

  componentDidMount(){
    videojs('vdo-bg').ready(function() {
      this.play();
    }),

    $('.ui.sidebar').sidebar({
        transition: 'overlay'
    }),

    $('.ui.sticky').sticky({
      context: '#introSegment'
    })

  },

  showNav(){
     $('.ui.sidebar')
       .sidebar('toggle')
   },


  render(){
    return(
      <div id="introSegment" className="intro-segment">
          <video id="vdo-bg" poster="poster.png" loop data-setup='{"autoplay": true}'>
             <source src="/videos/intro/intro-test-1.webm" type="video/webm"/>
             <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
          </video>
          <div id="navBar" className="nav-bar">
            <div className="logo">
              <a href="#introSegment"><img src="/images/intro/adacode-home-logo-blue.png"/></a>
            </div>
            <img src="/images/nav-arrow.png" className="nav-button" onMouseOver={this.showNav}/>
          </div>
          <div className="content-intro">
            <h1>ADACODE.IO</h1>
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
