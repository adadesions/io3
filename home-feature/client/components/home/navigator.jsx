Navigator = React.createClass({

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
    }),

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
          <a className="item logo-sidebar" href="#Intro">
            <img src="/images/intro/adacode-home-logo-grow.png"/>
          </a>
          <a className="tab item" href="#Intro">
            <p>HOME</p>
          </a>
          <a className="tab item" href="#Whatadacode">
            <p>ADACODE.IO</p>
          </a>
          <a className="tab item" href="#Course">
            <p>COURSES</p>
          </a>
          <a className="tab item" href="#Teams">
            <p>TEAM</p>
          </a>
          <a className="tab item" href="#Partners">
            <p>OUR PARTNERS</p>
          </a>
        </div>
      </div>
    )
  }
})
