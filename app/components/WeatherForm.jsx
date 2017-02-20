var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var locationRef = this.refs.location;
    var location = locationRef.value;

    if (location.length > 0) {
      locationRef.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return(
      <form  onSubmit={this.onFormSubmit}>
        <input type="search" ref='location' placeholder="Search weather by city"></input>        
        <button className="button expanded hollow">Get Weather!</button>
      </form>
    );
  }
})

module.exports = WeatherForm;
