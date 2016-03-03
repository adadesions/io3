WhatAda = React.createClass({

  componentDidMount(){

    $('#whatAdaSegment').click(function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open')
      $('#navBar').removeClass('nav-button-after')
    })

  },

  render(){
    return(
      <div id="Whatada" className="what-adaode-segment">
        <div className="content-what-ada lifted">
          <h1>We don't want to debate</h1>
          <h1>how educational system bad it is,</h1>
          <h1>We just want to serve the best for everyone</h1>
          <h3>
            <a href="#">AdaCode.io</a> is a Programming and English online school. it's not for all, <br/>
            but only a special person who want to unlock your potential like you, with<br/>
            AdaCode.io we can make the world better together...<br/>
          </h3>
        </div>
      </div>
    )
  }
})
