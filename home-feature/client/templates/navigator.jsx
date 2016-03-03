Navigator = React.createClass({

  componentDidMount(){
    $('#nav-icon2').click(function(){
  		$(this).toggleClass('open');
      $('.ui.sidebar')
        .sidebar('toggle')
      $(this).toggleClass('nav-button-after')
  	}),

    $('.nav-button').click(function(){
      $('.ui.sidebar')
        .sidebar('toggle')
      $('#navBar').toggleClass('nav-button-after')
  	}),

    $('.ui.sidebar').sidebar({
        transition: 'overlay',
        dimPage: false,
    })

    // $(function(){
    //         $("a.item").each(function (index, element){
    //             var href = $(this).attr("href")
    //             $(this).attr("hiddenhref", href)
    //             $(this).removeAttr("href")
    //         }),
    //         $("a.item").click(function(){
    //             url = $(this).attr("hiddenhref")
    //         })
    // })
  },


  render(){
    return(
      <div className="nav-bar-fixed">
        <div id="navBar">
          <div className="nav-button">
            <div id="nav-icon2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="ui right sidebar inverted vertical menu">
          <a className="item" href="#Intro">
            <p>HOME</p>
          </a>
          <a className="item" href="#Whatada">
            <p>ADACODE.IO</p>
          </a>
          <a className="item" href="#Course">
            <p>COURSES</p>
          </a>
          <a className="item" href="#Teams">
            <p>TEAM</p>
          </a>
          <a className="item" href="#Partners">
            <p>OUR PARTNERS</p>
          </a>
        </div>
      </div>
    )
  }
})
