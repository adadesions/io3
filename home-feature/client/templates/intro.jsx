Intro = React.createClass({

  componentDidMount(){

    $('.item').click(function() {
      $('body').css('display', 'none');
      $('body').fadeIn(1000);

      $('.link').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(2000, newpage);
      });

      function newpage() {
        window.location = newLocation;
      }
    })

    videojs('vdo-bg').ready(function() {
      this.play();
    }),

    $('.ui.sidebar').sidebar({
        transition: 'overlay',
        dimPage: false,
    }),

    $('#vdo-bg_html5_api').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('.content-intro').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('.logo').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('#whatAdaSegment').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('#courseSegment').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('#aboutUsSegment').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('#contactSegment').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('.partner').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('.footer').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    })
  },

  render(){
    return(
      <div id="introSegment" className="intro-segment">
          <video id="vdo-bg" poster="poster.png" loop data-setup='{"autoplay": true}'>
             <source src="/videos/intro/intro-test-1.webm" type="video/webm"/>
             <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
          </video>

          <div className="content-intro">
            <img src="/images/intro/adacode-home-logo-grow.png"/>
            <h3>SCHOOL . BUILD . INNOVATION</h3>
          </div>

          <div className="ui right sidebar inverted vertical menu">
            <a className="item" href="#introSegment">
              <p>HOME</p>
            </a>
            <a className="item" href="#whatAdaSegment">
              <p>ADACODE.IO</p>
            </a>
            <a className="item" href="#courseSegment">
              <p>COURSES</p>
            </a>
            <a className="item" href="#aboutUsSegment">
              <p>TEAM</p>
            </a>
            <a className="item" href="#oursPartner">
              <p>OURS PARTNER</p>
            </a>
          </div>
        </div>
    )
  }
})
