NavigatorSchool = React.createClass({
  render(){
    return(
      <div className="fixed-action-btn horizontal click-to-toggle">
        <a className="btn-floating btn-large red">
          <i className="large mdi-navigation-menu"></i>
        </a>
        <ul>
          <li><a href="/" className="btn-floating red"><i className="medium material-icons">Home</i></a></li>
        </ul>
      </div>
    )
  }
})
