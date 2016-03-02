AboutUs = React.createClass({

  componentDidMount(){
    $('.founder-one img').hover(function(){
      $('.shape.one').shape('flip back');
    }),

    $('.founder-two img').hover(function(){
      $('.shape.two').shape('flip back');
    }),

    $('.founder-three img').hover(function(){
      $('.shape.three').shape('flip back');
    }),

    $('.founder-four img').hover(function(){
      $('.shape.four').shape('flip back');
    })

  },

  render(){
    return(
      <div id="aboutUsSegment" className="aboutus-segment">
        <div className="founder-group">
          <div className="founder-column-one">
            <div className="founder-two">
              <div className="ui shape two">
                <div className="sides">
                  <div className="active side">
                    <img className="ui circular image" src="/images/about/cto.png"/>
                  </div>
                  <div className="side">
                    <img className="ui circular image" src="/images/about/cto-back.png"/>
                  </div>
                </div>
              </div>
              <div className="founder-two-detail">
                <h3>Darunpob Prasutsangchant</h3>
                <p>"Technology is change really fast,<br/>
                Adacode.io become a middleman between you and tech"</p>
              </div>
            </div>
          </div>
          <div className="founder-column-two">
            <div className="founder-one">
              <div className="ui shape one">
                <div className="sides">
                  <div className="active side">
                    <img className="ui circular image" src="/images/about/ceo.png"/>
                  </div>
                  <div className="side">
                    <img className="ui circular image" src="/images/about/ceo-back.png"/>
                  </div>
                </div>
              </div>
              <div className="founder-one-detail">
                <h3>Ada Kaminkure</h3>
                <p>"Programming is a new key of intelligent,<br/>
                magic is happening here and now"</p>
              </div>
            </div>
            <h2>ADACODE.IO's TEAM</h2>
            <div className="founder-three">
              <div className="ui shape three">
                <div className="sides">
                  <div className="active side">
                    <img className="ui circular image" src="/images/about/des.png"/>
                  </div>
                  <div className="side">
                    <img className="ui circular image" src="/images/about/des-back.png"/>
                  </div>
                </div>
              </div>
              <div className="founder-three-detail">
                <h3>Chatpakon Pumuenwai</h3>
                <p>"The best pair of ingredients of development<br/>
                is Creative and Creative"</p>
              </div>
            </div>
          </div>
          <div className="founder-column-three">
            <div className="founder-four">
              <div className="ui shape four">
                <div className="sides">
                  <div className="active side">
                    <img className="ui circular image" src="/images/about/lec.png"/>
                  </div>
                  <div className="side">
                    <img className="ui circular image" src="/images/about/lec-back.png"/>
                  </div>
                </div>
              </div>
              <div className="founder-four-detail">
                <h3>Pearwa Chonnitorn</h3>
                <p>"English language is the key<br/>
                to open your new world"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
