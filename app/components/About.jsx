var React = require('react');


var About = (props) => {
   return(
    <div>
        <h1 className="text-center page-title">About</h1><hr/>
        <p>This is a weather application build on ReactJS. </p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            You can get the source code on GitHub<br/>
            Hit this link <a href='https://github.com/DavyCode/react-weather-app'>Link</a>
          </li> <br/>
          <li>
            <a href="https://facebook.github.io/react">React</a> - JavaScript framework used.
          </li><br/>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li><br/>
        </ul>
      </div>
   )
} 
 

module.exports= About;
