var React = require('react');
var {Link} = require('react-router');

var Sample = (props) => {
    return(
      <div>
          <h1 className='text-center'>Sample component</h1>
          <p>Here are a few examples to try out</p>
          <ol>
              <li>
                  <Link to='/?location=Abuja'> Abuja, Nigeria </Link>
              </li>
              <li>
              <Link to='/?location=Lagos'> Lagos, Nigeria </Link>
              </li>
          </ol>
      </div>
    )
} 
module.exports= Sample;
