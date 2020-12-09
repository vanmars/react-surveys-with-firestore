import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #DA2C38;
  padding: 0 2em;
  margin: 0 -1em;
  display: flex;
  align-items: baseline;
  color: white;
`;

const HomeLink = styled.div`
  margin-left: 1em;
  margin-right: auto;
  
  & > a {
    color: 011936;
    text-decoration: none;
  }

  & > a:hover {
    color: #F9DC5C;
  }
`;

const SigninLink = styled(HomeLink)`
  margin-left: auto;
  margin-right: 0;

`;

function Header() {
  return (
    <React.Fragment>
      <NavWrapper>
        <h1>Survey Generator</h1>
        <HomeLink>
          <Link to='/'>Home</Link>
        </HomeLink>
        <SigninLink>
          <Link to='/signin'>Sign In/Sign Out</Link>
        </SigninLink>
      </NavWrapper>
    </React.Fragment>
  );
}

export default Header;