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
        <input type="text" ref='location' placeholder="Enter location here"></input>
        <br/><br/>
        <button>Get Weather!</button>
      </form>
    );
  }
})

module.exports = WeatherForm;
