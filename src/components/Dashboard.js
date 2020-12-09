import React from 'react';
import styled from 'styled-components';
import { useFirestore } from 'react-redux-firebase';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app';
import Survey from './Survey';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding: 1em;
  justify-content: flex-start;
`;

const DashboardHeader = styled.h1`
  font-size: 28px;
  margin: 2em auto 0;
`;

const DashboardSubHeader = styled.h2`
  font-size: 22px;
`;


function Dashboard() {
  const auth = firebase.auth();
  const firestore = useFirestore();

  useFirestoreConnect([
    { collection: 'surveys' }
  ]);

  if(!isLoaded(auth)) {
    return (
      <Wrapper>
        <DashboardHeader>Loading . . .</DashboardHeader>
      </Wrapper>
    );
  };

  if(isLoaded(auth) && auth.currentUser == null) {
    return (
      <Wrapper>
        <DashboardHeader>You must be signed in to access the Survey List.</DashboardHeader>
      </Wrapper>
    );
  };

  if(isLoaded(auth) && auth.currentUser != null) {

    firestore.collection('surveys').where('creatorId', '==', `"${auth.currentUser.uid}"`)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      })

    return (
        <React.Fragment>
          <div className="p-4">
          <h1>Dashboard</h1>
          <hr />
          <h2>My Surveys</h2>
        </div>
        </React.Fragment>
    );
   
   
  };
}

export default Dashboard;