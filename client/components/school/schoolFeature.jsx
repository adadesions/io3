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
            <div className="container">
              <nav id="nav" className="nav">
                <button className="menu">
                  <em className="hamburger"></em>
                </button>
                <div className="brand">
                  <a href="#"><img src="images/intro/adacode-home-logo.png"/></a>
                </div>
                <ul className="navbar">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="section">
            <div className="school-content">
              <div className="container">
                <div className="school-content-blog">
                  <h1>Welcome to AdaCode.io Skool</h1>
                  <h1>Keys of success are too many, but one key of failure is "UNEDUCATED"</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img className="background-newcourse" src="/images/school/homepage-school/course-bg-sub1.png"/></div>
            <div className="section recommended-course">
              <h1>Recommended Courses</h1>
              <div className="row">
                <div className="container">
                  <div className="container">
                    <div className="col s12 m4">
                      <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                          <img className="activator" src="images/school/course-item/meteor.png"/>
                        </div>
                        <div className="card-content">
                          <span className="card-title activator grey-text text-darken-4">Meteor<i className="material-icons right">more_vert</i></span>
                          <p><a href="/school/path">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                          <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m4">
                      <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                          <img className="activator" src="images/school/course-item/s.png"/>
                        </div>
                        <div className="card-content">
                          <span className="card-title activator grey-text text-darken-4">Semantic<i className="material-icons right">more_vert</i></span>
                          <p><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                          <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m4">
                      <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                          <img className="activator" src="images/school/course-item/react-js.png"/>
                        </div>
                        <div className="card-content">
                          <span className="card-title activator grey-text text-darken-4">React<i className="material-icons right">more_vert</i></span>
                          <p><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                          <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="all-course">
            <h1>All Courses</h1>
            <div className="row">
              <div className="container">
                <div className="container">
                  <div className="col s12 m4">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/school/course-item/js.png"/>
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">JavaScript<i className="material-icons right">more_vert</i></span>
                        <p><a href="/school/path">This is a link</a></p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m4">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/school/course-item/ep.png"/>
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">English<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m4">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/school/course-item/web.png"/>
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Web<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="container">
                <div className="container">
                  <div className="col s12 m4">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/school/course-item/meteor.png"/>
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Meteor<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m4">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/school/course-item/s.png"/>
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Semantic<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m4">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/school/course-item/react-js.png"/>
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">React<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section footer-school">
            <Footer />
          </div>
      </div>
    )
  }
})
