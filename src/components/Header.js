import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <h1>Survey Generator</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In/Sign Out</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;