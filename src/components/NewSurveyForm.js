import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'


function NewSurveyForm(props){

  const firestore = useFirestore();

  function addSurveyToFirestore(event) {
    event.preventDefault();
    props.onNewSurveyCreation();
    return firestore.collection('surveys').add(
      {
        name: event.target.name.value, 
        description: event.target.description.value, 
        question1: event.target.question1.value, 
        question2: event.target.question2.value, 
        question3: event.target.question3.value, 
        question4: event.target.question4.value, 
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addSurveyToFirestore}
        buttonText="Add Survey!" />
    </React.Fragment>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurveyForm;