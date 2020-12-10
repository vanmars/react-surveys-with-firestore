import React from 'react';
import firebase from 'firebase/app';
import styled from 'styled-components';

function Signin(event){  

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

  function doSignup(event) {
    event.preventDefault()
    const email = event.target.signupEmail.value;
    const password = event.target.signupPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log('Successfully signed up!');
      document.getElementById('signupForm').reset();
      alert('Congrats! You\'ve successfully signed up!')
    }).catch(function(error){
      console.log(error.message);
    });
  }

  function doSignin(event) {
    event.preventDefault()
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      console.log('Successfully signed in!');
      document.getElementById('signinForm').reset();
      alert('Congrats! You\'ve successfully signed in!')
    }).catch(function(error){
      console.log(error.message);
    });
  }
 
  return (
    <React.Fragment>
      <div className="row d-flex mt-5 mx-5 justify-content-around">

        <div className="col-4 card shadow p-4 text-center">
          <h1 style={{fontSize: 36}}>Sign Up</h1> <br />
          <form onSubmit={doSignup} id='signupForm'>
            <input name='signupEmail' type='text' placeholder='Email' class='form-control' /> <br /><br />
            <input name='signupPassword' type='text' placeholder='Password' class='form-control' /> <br /><br />
            <ButtonDark type='submit'>Sign Up</ButtonDark>
          </form>
        </div>

        <div className="col-4 card shadow p-4 text-center">
          <h1 style={{fontSize: 36}}>Sign In</h1> <br />
          <form onSubmit={doSignin} id='signinForm'>
            <input name='signinEmail' type='text' placeholder='Email' class='form-control' /> <br /><br />
            <input name='signinPassword' type='text' placeholder='Password' class='form-control' /> <br /><br />
            <ButtonDark type='submit'>Sign In</ButtonDark>
          </form>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Signin