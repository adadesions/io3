Intro = React.createClass({

  componentDidMount(){
    videojs('vdo-bg').ready(function() {
      this.play();
    })
  },

  render(){
    return(
      <div id="introSegment" className="intro-segment">
          <video id="vdo-bg" poster="poster.png" loop data-setup='{"autoplay": true}'>
             <source src="/videos/intro/intro-test-1.webm" type="video/webm"/>
             <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
          </video>
        <div className="logo">
          <a href="#introSegment"><img src="/images/adacode-home-logo.png"/></a>
        </div>
        <img src="/images/nav-arrow.png" className="nav-button" onMouseOver={this.showNav}/>
        <div className="content-intro">
          <h1>ADACODE.IO</h1>
          <h3>SCHOOL . BUILD . INNOVATION</h3>
        </div>
      </div>
    )
  }
})
