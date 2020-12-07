import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid'; 


function NewSurveyForm(props){

  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({name: event.target.name.value, description: event.target.description.value, id: v4()});
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