var React = require('react');

var WeatherForm = React.createClass({
     render: function (){
       return (
              <div>
                 <form>
                    <input type="text" placeholder="Input Location"/>
                   <button>Get Temprature</button>
                 </form>
              </div>
       );
     }
});

module.exports =WeatherForm;