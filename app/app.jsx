var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Sample = require('Sample');

//Load Foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css')
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyles')


ReactDOM.render(
      <Router history={hashHistory}>
          <Route path='/' component={Main}>
              <Route path="about" component={About}/>
              <Route path="sample" component={Sample}/>          
              <IndexRoute component={Weather}/>  
          </Route>    
      </Router>,
      document.getElementById('app')
     );




