Intro = React.createClass({

  componentDidMount(){

    videojs('vdo-bg').ready(function() {
      this.play();
    }),



    $('#vdo-bg_html5_api').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('.content-intro').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    })

  },

  render(){
    return(
      <div id="Intro" className="intro-segment">
        <video id="vdo-bg" poster="poster.png" loop data-setup='{"autoplay": true}'>
           <source src="/videos/intro/intro-test-1.webm" type="video/webm"/>
           <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
        </video>

        <div className="content-intro">
          <img src="/images/intro/adacode-home-logo-grow.png"/>
          <h3>SCHOOL . BUILD . INNOVATION</h3>
        </div>
      </div>
    )
  }
})
