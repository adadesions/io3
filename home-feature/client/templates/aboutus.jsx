AboutUs = React.createClass({

  componentDidMount(){
    $('.founder-one').hover(function(){
      $('.shape').shape('flip back');
    })
  },

  render(){
    return(
      <div id="aboutUsSegment" className="aboutus-segment">
        <div className="founder-one">
          <div className="ui shape">
            <div className="sides">
              <div className="active side">
                <img className="ui circular image" src="/images/partner/back-img.jpg"/>
              </div>
              <div className="side">
                <img className="ui circular image" src="/images/partner/front-img.gif"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
