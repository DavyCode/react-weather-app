var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Nav component</h3>
        <Link to="/">Temprature</Link>
        <Link to="/about"> About</Link>
        <Link to="/sample"> Sample</Link>
      </div>
      );
  }
});

module.exports= Nav;