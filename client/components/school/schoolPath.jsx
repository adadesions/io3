Path = React.createClass({

  componentDidMount(){
    $('#levelOne').click(function(){
      Materialize.showStaggeredList('#levelBlog')
      $('.level-blog').removeClass('hidden')
    }),

    $(document).ready(function(){
      $('.parallax').parallax();
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
      <div className="path-segment">
        <NavigatorSchool />
        <NavigatorSchoolMobile />
        <div className="path-section">
          <div className="section">
            <div id="headCourse" className="head-course">
              <img src="/images/school/course-item/js-icon.png" className="circle" />
              <div className="card-panel pink accent-1">
                <span className="white-text">
                  <h4>SPEND SOME TIME WITH THIS POWERFUL
                  <br/>SCRIPTING LANGUAGE AND LEARN TO BUILD
                  <br/>LIGHTWEIGHT APPLICATIONS
                  <br/>WITH ENHANCE USER INTERFACES.</h4>
                </span>
              </div>
            </div>
          </div>


          <div className="section">
            <div className="path-blog">
              <div className="col s12 m4">
                <div id="levelOne" className="waves-effect waves-blue card-panel">
                  <span className="white-text">
                    <h1>LEVEL</h1>
                    <h1>1</h1>
                  </span>
                </div>
              </div>
              <div className="col s12 m4">
                  <div id="levelTwo" className="waves-effect waves-blue card-panel">
                  <span className="white-text">
                    <h1>LEVEL</h1>
                    <h1>2</h1>
                  </span>
                </div>
              </div>
              <div className="col s12 m4">
                <div id="levelThree" className="waves-effect waves-blue card-panel">
                  <span className="white-text">
                    <h1>LEVEL</h1>
                    <h1>3</h1>
                  </span>
                </div>
              </div>
            </div>
          </div>


          <div className="section level-blog hidden">
            <div className="container">
              <ul id="levelBlog">
                <li>
                  <a href="/school/path/player">
                    <div id="part1" className="card-panel">
                      <span className="white-text">
                        <h1>JAVASCRIPT LEVEL 1 PART 1</h1>
                        <h2>Learn to manipulate values on the console</h2>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/school/path/player">
                    <div id="part2" className="card-panel">
                      <span className="white-text">
                        <h1>JAVASCRIPT LEVEL 1 PART 2</h1>
                        <h2>Learn to manipulate values on the console</h2>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/school/path/player">
                    <div id="part3" className="card-panel">
                      <span className="white-text">
                        <h1>JAVASCRIPT LEVEL 1 PART 3</h1>
                        <h2>Learn to manipulate values on the console</h2>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
