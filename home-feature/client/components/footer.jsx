Footer = React.createClass({

  componentDidMount(){

    $('.footer').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    }),

    $('img#contact-detail')
      .popup({
        popup : $('.custom.popup'),
        on    : 'click'
      })

  },


  render(){
    return(
      <div className="footer">
        <div className="icon-bar-contact">
          <div className="center-contact">
            <a href="https://www.facebook.com/adacode.io/?ref=hl"><img src="/images/contact/contact-facebook-button.png"/></a>
            <a href="#"><img src="/images/contact/contact-twitter-button.png"/></a>
            <a href="#"><img src="/images/contact/contact-google-button.png"/></a>
            <img id="contact-detail" src="/images/contact/contact-phone-button.png"/>
          </div>
          <div className="ui custom popup top left transition hidden-popup">
            <h3>Phone : (+66)91-9594-945(Ada)</h3>
          </div>
        </div>
        <hr/>
        <div className="copyright-logo">
          <img src="/images/footer/mobile/copyright.png"/>
        </div>

      </div>
    )
  }
})
