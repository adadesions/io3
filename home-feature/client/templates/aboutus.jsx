AboutUs = React.createClass({

  componentDidMount(){
    $('.founder-one').hover(function(){
      $('.shape.one').shape('flip back');
    }),

    $('.founder-two').hover(function(){
      $('.shape.two').shape('flip back');
    }),

    $('.founder-three').hover(function(){
      $('.shape.three').shape('flip back');
    }),

    $('.founder-four').hover(function(){
      $('.shape.four').shape('flip back');
    }),

    $('.founder-five').hover(function(){
      $('.shape.five').shape('flip back');
    }),

    $('.founder-six').hover(function(){
      $('.shape.six').shape('flip back');
    })
  },

  render(){
    return(
      <div id="aboutUsSegment" className="aboutus-segment">
        <div className="founder-row-one">
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
              <p>"Programming is the new key of intelligent,<br/>
              magic is happening here and now"</p>
            </div>
          </div>
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
              <p>"Technology is change too fast,<br/>
              Adacode.io become a middle man between you and tech"</p>
            </div>
          </div>
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
        <div className="founder-row-two">
          <div className="founder-four">
            <div className="ui shape four">
              <div className="sides">
                <div className="active side">
                  <img className="ui circular image" src="/images/about/coo.png"/>
                </div>
                <div className="side">
                  <img className="ui circular image" src="/images/about/coo-back.png"/>
                </div>
              </div>
            </div>
            <div className="founder-four-detail">
              <h3>Poompan Phonsanthia</h3>
              <p>"Only one way to drive the world better<br/>
              and faster is educate people"</p>
            </div>
          </div>
          <div className="founder-five">
            <div className="ui shape five">
              <div className="sides">
                <div className="active side">
                  <img className="ui circular image" src="/images/about/lec.png"/>
                </div>
                <div className="side">
                  <img className="ui circular image" src="/images/about/lec-back.png"/>
                </div>
              </div>
            </div>
            <div className="founder-five-detail">
              <h3>Pearwa Chonnitorn</h3>
              <p>"English language is the key<br/>
              to open your new world"</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
