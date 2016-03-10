Container = React.createClass({
  // mixins: [ReactMeteorData],

  render(){
    return(
      <div className="home-feature">
        {this.props.content}
      </div>
    )
  }
})
