import React from 'react';
import { css } from 'react-emotion';
import { connect } from 'react-redux';
import Link from 'gatsby-link';

const mapStateToProps = state => {
  return { state }
};

const navStyles = css`
  height: 3.5rem;
  background-color: orange;
  display: flex;
  align-items: center;
  color: white;
  padding: 0 5rem;

  & div {
    width: 100%;
  }

  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    margin-left: auto;
    align-items: center;
  }
  & ul li {
    display: inline-block;
    margin-left: 1rem;

    > a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
    }
    > a:hover {
      text-decoration: underline;
    }
  }
  & ul li h5 {
    padding: 0.5rem;
    border: 2px solid white;
  }
`;

const Navigation = ({state}) => (
  <nav className={navStyles}>
    <div>
      <h4>
        Redux + css-in-js in Gatsby
      </h4>
    </div>
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/counter">
          Counter
        </Link>
      </li>
      <li>
        <h5>
          Current Count: {state}
        </h5>
      </li>
  </ul>
  </nav>
);

export default connect(mapStateToProps)(Navigation);
