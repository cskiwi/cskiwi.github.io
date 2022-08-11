import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header" style={this.props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
          <FontAwesomeIcon icon={faGem}  />
        </div>
        <div className="content">
          <div className="inner">
            <h1>Dimension</h1>
            <p>
              A fully responsive site template designed by{' '}
              <a href="https://html5up.net">HTML5 UP</a> and released
              <br />
              for free under the{' '}
              <a href="https://html5up.net/license">Creative Commons</a>{' '}
              license.
            </p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  this.props.onOpenArticle('intro');
                }}
              >
                Intro
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  this.props.onOpenArticle('work');
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  this.props.onOpenArticle('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  this.props.onOpenArticle('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
