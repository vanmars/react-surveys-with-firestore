import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #011936;
  padding: 1em 2em 0;
  display: flex;
  align-items: baseline;
  color: white;
`;

const HomeLink = styled.div`
  margin-left: 2em;
  margin-right: auto;

  & > a {
    color: #C1AE7C;
    text-decoration: none;
    margin-right: 1em;
    font-size: 1em;
  }

  & > a:hover {
    color: #CC4BC2;
  }
`;

const SigninLink = styled(HomeLink)`
  margin-left: auto;
  margin-right: 0;
`;

const BrandName = styled.h1`
  font-size: 1.5em;
`;

function Header() {
  return (
    <React.Fragment>
      <NavWrapper>
        <BrandName>Survey Generator</BrandName>
        <HomeLink>
          <NavLink to='/' activeClassName="active">Home</NavLink>
          <NavLink to='/dashboard' activeClassName="active">Dashboard</NavLink>
        </HomeLink>
        <SigninLink>
          <Link to='/signin'>Sign In</Link>
        </SigninLink>
      </NavWrapper>
    </React.Fragment>
  );
}

export default Header;