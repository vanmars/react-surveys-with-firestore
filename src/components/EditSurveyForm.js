import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function EditSurveyForm (props) {
  const { survey, onEditSurvey } = props;

  const firestore = useFirestore();

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    onEditSurvey();
    const propertiesToUpdate = {
      name: event.target.name.value, 
      description: event.target.description.value, 
      question1: event.target.question1.value, 
      question2: event.target.question2.value, 
      question3: event.target.question3.value, 
      question4: event.target.question4.value, 
    }
    return firestore.update({ collection: 'surveys', doc: survey.id }, propertiesToUpdate)
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