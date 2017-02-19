var React = require('react');

var WeatherMessage = ({temp, location}) =>{  
  return(

    <p>It's {temp}°F in {location}</p>
  );
}

module.exports = WeatherMessage;
