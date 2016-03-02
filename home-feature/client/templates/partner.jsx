Partner = React.createClass({

  componentDidMount(){

    $('.partner-one').hover(function(){
      $('.partner-one').toggleClass('partner-hover');
    }),

    $('.partner-two').hover(function(){
      $('.partner-two').toggleClass('partner-hover');
    }),

    $('.partner-three').hover(function(){
      $('.partner-three').toggleClass('partner-hover');
    }),

    $('.partner-four').hover(function(){
      $('.partner-four').toggleClass('partner-hover');
    }),

    $('.partner-five').hover(function(){
      $('.partner-five').toggleClass('partner-hover');
    })

  },

  render(){
    return(
      <div id="oursPartner" className="partner">
        <h2>Our Partners</h2>
        <div className="partner-row-one">
          <div className="partner-one">
            <a href="http://thaiprogrammer.org/"><img className="ui circular image" src="/images/footer/thaiprogramer-logo.png"/></a>
          </div>
          <div className="partner-two">
            <a href="http://www.comscicafe.com/home/"><img className="ui circular image" src="/images/footer/comscicafe-logo.png"/></a>
          </div>
          <div className="partner-three">
            <a href="https://www.facebook.com/khadev"><img className="ui circular image" src="/images/footer/khadev-logo.png"/></a>
          </div>
        </div>
        <div className="partner-row-two">
          <div className="partner-four">
            <a href="http://cloudcourse.io/"><img className="ui circular image" src="/images/footer/cloudcourse-logo.png"/></a>
          </div>
          <div className="partner-five">
            <a href="https://drivesoftcenter.net/"><img className="ui circular image" src="/images/footer/drivesoft-logo.png"/></a>
          </div>
        </div>
      </div>
    )
  }
})
