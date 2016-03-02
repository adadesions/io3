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
  	})
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
      </div>
    )
  }
})
