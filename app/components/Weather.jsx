var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  componentDidMount (){
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash= '#/';
    }
  },
  componentWillReceiveProps (newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash= '#/';
    }
  },
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch (location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    })
    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (error) => {
      this.setState({
        isLoading: false,
        errorMessage: error.message,
        location: undefined,
        temp: undefined
      })
    })
  },
  render () {
    var {location, temp, isLoading, errorMessage} = this.state;
    function renderMessage() {
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }
      if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string'){
        return <ErrorModal title="Error" message={errorMessage}/>
      }
    }
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = Weather;
