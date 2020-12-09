import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import firebase from 'firebase/app';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #011936;
  padding: 1.5em 2em .5em;
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

const ButtonDark = styled.button`
  margin: 0;  
  width: 100px;
  border-radius: 5px;
  border: solid 2px #dd5e98;
  color: white;
  background-color: #dd5e98;

  &:hover {
    color: white;
    background-color: #011936;
  }
`;

const ButtonLight = styled(ButtonDark)`
  margin-right: 1em;
  background-color: white;

  &:hover {
    background-color: #011936;
    & > a {
      color: white;
    }
  }

  & > a {
    color: #dd5e98;
  }

  & > a:hover {
    text-decoration: none;
  }
`;


function doSignout(event) {
  firebase.auth().signOut().then(function(){
    console.log('Successfully logged out!');
    alert('You\'ve successfully signed out! Goodbye!')
  }).catch(function(error){
    console.log(error.message);
  });
}

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
          <ButtonLight><Link to='/signin'>Sign In</Link></ButtonLight>
          <ButtonDark onClick={doSignout}>Sign Out</ButtonDark>
        </SigninLink>
      </NavWrapper>
    </React.Fragment>
  );
}

export default Header;