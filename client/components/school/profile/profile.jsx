Profile = React.createClass({

  componentDidMount(){

    (function($) {
    "use strict"

    var $navbar = $(".nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height()

    //scroll top 0 sticky
    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
          $navbar.addClass("sticky");
        } else {
          $navbar.removeClass("sticky");
        }
    })

    //section sticky
    /*$(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if ($(window).height() > scrollTop) {
          $navbar.removeClass("sticky");
        } else {
          $navbar.addClass("sticky");
        }
    });*/

    })(jQuery, undefined)

    $(".menu").click(function(){
      $("#nav").toggleClass("open");
    })

  },

  render(){
    return(
      <div className="profile-section">
        <NavigatorSchool />
        <div className="row">
          <div className="col s8 m8 l8 profile-upload-detail">
            <div className="menu-upload">
              <h2>Video</h2>
            </div>
            <MyUpload />
          </div>
          <div className="col s4 m4 l4 profile-detail">
            <ProfileDetail />
          </div>
        </div>
        <div className="fixed-action-btn horizontal click-to-toggle">
          <a href="/school" className="btn-floating btn-large teal">
            <i className="material-icons">fast_rewind</i>
          </a>
        </div>
      </div>
    )
  }
})
