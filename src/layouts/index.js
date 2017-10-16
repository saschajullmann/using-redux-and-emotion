import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../components/Navigation/index.js'
import { injectGlobal, css } from 'react-emotion';

injectGlobal`
  body {
    margin: 0;
  }
`;

const bodyWrapper = css`
  padding: 2rem 5rem;
`;

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <div className={bodyWrapper}>
      { children() }
    </div>
  </div>
);

export default Layout;
