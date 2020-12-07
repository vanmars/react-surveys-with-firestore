import React from 'react';
import PropTypes from "prop-types";
import Survey from  './Survey';


function SurveyList(props) {
  return (
    <React.Fragment>
     <hr/>
     {Object.values(props.surveyList).map((survey) => 
      <Survey
        whenSurveyClicked = { props.onSurveySelection }
        name={survey.name}
        description={survey.description}
        question1={survey.question1}
        question2={survey.question2}
        question3={survey.question3}
        question4={survey.question4}
        id={survey.id}
        key={survey.id}
      />
      
     )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  surveyList: PropTypes.object,
  onSurveySelection: PropTypes.func
};

export default SurveyList;