var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');



var Weather = React.createClass({
  getInitialState : function(){
     return {
      loading : false
     }
  },
  handleSearch : function (location){
      var that = this;
      
      this.setState({
        loading : true
      });

      openWeatherMap.getTemp(location).then(function (temp){
            that.setState({
            location : location,
            temp: temp,
            loading : false
         });
       }, function(errorMessage){
           that.setState({
              loading : false
           })
           alert(errorMessage);
       });
  },
  render: function(){
     var {loading, temp, location} = this.state;

     function renderMessage(){
         if(loading){
           return <h3>Just a second...</h3>
         }else if (temp && location){
           return <WeatherMessage temp={temp} location={location}/>
         }
     }

    return (
        <div>
          <h3>Weather component</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
    );
  }
});

module.exports= Weather;
 