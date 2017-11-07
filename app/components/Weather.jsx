var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');



var Weather = React.createClass({
  getInitialState : function(){
     return {
       location : 'Miami',
       temp : 66
     }
  },
  handleSearch : function (location){
      this.setState({
        location : location,
        temp: 26
      });
  },
  render: function(){
    return(
        <div>
          <h3>Weather component</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          <WeatherMessage/>
        </div>
    );
  }
});

module.exports= Weather;
 