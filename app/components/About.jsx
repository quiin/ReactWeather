var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built on React for Udemy's <a href="udemy.com/the-complete-react-web-app-developer-course/">The Complete React Web App Developer Course</a>
      </p>
      <p>
        Tools used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react/">React</a>
          </li>
          <li>
            <a href="http://foundation.zurb.com/sites/docs/">Foundation</a>
          </li>
          <li>
            <a href="https://github.com/quiin/ReactWeather">Git & GitHub</a>
          </li>
          <li>
            <a href="http://thawing-journey-23021.herokuapp.com">Heroku</a>
          </li>
        </ul>
      </p>
    </div>
  );
};

module.exports = About;
