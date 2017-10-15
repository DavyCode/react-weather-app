var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Nav component</h3>
        <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Temprature</IndexLink>
        <Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> About</Link>
        <Link to="/sample" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Sample</Link>
      </div>
      );
  }
});

module.exports= Nav;