var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Sample = require('Sample');


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




    //  82aba45329a8c1c7716a6803b4e42fb3