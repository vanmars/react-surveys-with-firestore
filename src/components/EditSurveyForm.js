import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditSurveyForm (props) {
  const { survey, onEditSurvey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    onEditSurvey({name: event.target.name.value, description: event.target.description.value, question1: event.target.question1.value, question2: event.target.question2.value, question3: event.target.question3.value, question4: event.target.question4.value, survey: survey.id});
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditSurveyFormSubmission}
        buttonText="Update Survey" />
    </React.Fragment>
  );
}

EditSurveyForm.propTypes = {
  survey: PropTypes.object,
  onEditSurvey: PropTypes.func
};

export default EditSurveyForm;