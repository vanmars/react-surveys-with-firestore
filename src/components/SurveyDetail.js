import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import firebase from 'firebase/app';

function SurveyDetail(props) {
  const { survey, onClickingDelete, onClickingEdit } = props;
  const firestore = useFirestore();

  function handleSurveyResponse(event) {
    event.preventDefault();
    const surveyResponse = {
      response1: event.target.response1.value,
      response2: event.target.response2.value,
      response3: event.target.response3.value,
      response4: event.target.response4.value,
      surveyId: survey.id,
      respondentId: firebase.auth().currentUser.uid
    }
    document.getElementById("responseForm").reset();
    alert('Survey successfully submitted! Submit the survey again or return the the survey list. ')
    console.log("User id who completed the survey: ", firebase.auth().currentUser.uid);
    return firestore.collection('completedSurveys').add(surveyResponse);
  }

 let updateAndDeleteButtons = null;
 const creatorId =  firestore.get({collection: 'surveys', doc: survey.id}).then(survey => survey.get('creatorId'));
 console.log("Current user id: ", firebase.auth().currentUser.uid  )
//  console.log("Survey creator id: ", firestore.get({collection: 'surveys', doc: survey.id}).then(survey => survey.get('creatorId')))
  console.log("Survey creator id: ", creatorId)
  console.log(survey.timeOpen);

 if (firebase.auth().currentUser.uid === creatorId){
   updateAndDeleteButtons = 
   <div> 
    <button onClick={ onClickingEdit }>Update Survey</button>
    <button onClick={()=> onClickingDelete(survey.id) }>Close Survey</button>
  </div>  
  } 


  return (
    <React.Fragment>
      <h1>Survey Detail</h1>
      <h3>{survey.name}</h3>
      <h6>{survey.description}</h6>

      <form id="responseForm" onSubmit={handleSurveyResponse}>
        <label htmlFor='response1'>{survey.question1}</label>
        <textarea name='response1' type='text' placeholder='Enter your response here.' />

        <label htmlFor='response2'>{survey.question2}</label>
        <textarea name='response2' type='text' placeholder='Enter your response here.' />

        <label htmlFor='response3'>{survey.question3}</label>
        <textarea name='response3' type='text' placeholder='Enter your response here.' />

        <label htmlFor='response4'>{survey.question4}</label>
        <textarea name='response4' type='text' placeholder='Enter your response here.' />
  
        <button type='submit'>Submit</button> 
      </form>
      <hr />
      {updateAndDeleteButtons}
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
}

export default SurveyDetail;