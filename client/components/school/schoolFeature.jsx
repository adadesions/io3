School = React.createClass({

  componentDidMount(){

    $(document).ready(function(){
      $('.parallax').parallax()
    }),

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
      <div className="school-blog">
        <NavigatorSchool />
        <div className="header-school">
          <div className="section">
            <div className="school-content">
              <ContentSchool />
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img className="background-newcourse" src="/images/school/homepage-school/course-bg-sub1.png"/></div>
            <div className="section recommended-course">
              <h1>Recommended Courses</h1>
              <div className="row">
                <div className="container">
                  <RecommendedCourse />
                </div>
              </div>
            </div>
          </div>

          <div className="all-course">
            <h1>All Courses</h1>
            <div className="row">
              <AllCourse />
          </div>
        </div>
        <div className="section footer-school">
          <Footer />
        </div>
      </div>
    )
  }
})
