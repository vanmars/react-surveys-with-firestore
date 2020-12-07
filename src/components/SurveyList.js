import React from 'react';
import PropTypes from "prop-types";
import Survey from  './Survey';


function SurveyList(props) {
  return (
    <React.Fragment>
     <hr/>
     {props.surveyList.map((survey) => 
      <Survey
        whenSurveyClicked = { props.onSurveySelection }
        name={survey.name}
        description={survey.descrption}
        question1={survey.question1}
        question2={survey.question2}
        question3={survey.question3}
        question4={survey.question4}
        id={survey.id}
        key={survey.id}/>
     )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func
};

export default SurveyList;