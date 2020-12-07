import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid'; 


function NewSurveyForm(props){

  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({name: event.target.name.value, description: event.target.description.value, question1: event.target.question1.value, question2: event.target.question2.value, question3: event.target.question3.value, question4: event.target.question4.value, id: v4()});
    }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewSurveyFormSubmission}
        buttonText="Add Survey!" />
    </React.Fragment>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurveyForm;