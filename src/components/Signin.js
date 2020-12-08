import React from 'react';
import firebase from 'firebase/app';

function Signin(event){  

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

  function doSignout(event) {
    firebase.auth().signOut().then(function(){
      console.log('Successfully logged out!');
      alert('You\'ve successfully signed out! Goodbye!')
    }).catch(function(error){
      console.log(error.message);
    });
  }

 
  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={doSignup} id='signupForm'>
        <input name='signupEmail' type='text' placeholder='Email' />
        <input name='signupPassword' type='text' placeholder='Password' />
        <button type='submit'>Sign Up</button>
      </form>

      <h1>Sign In</h1>
      <form onSubmit={doSignin} id='signinForm'>
        <input name='signinEmail' type='text' placeholder='Email' />
        <input name='signinPassword' type='text' placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>

      <h1>Sign Out</h1>
      <button onClick={doSignout}>Sign Out</button>

    </React.Fragment>
  );
}

export default Signin