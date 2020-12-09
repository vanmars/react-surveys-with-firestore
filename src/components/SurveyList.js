import React from 'react';
import PropTypes from "prop-types";
import Survey from  './Survey';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import styled from 'styled-components';

const SurveysHeader = styled.h1`
  font-size: 32px;
  margin: 2em auto 0;
`;

const SurveysParagraph = styled.p`
  font-size: 16px;
  margin: 1em auto 0;
`;

function SurveyList(props) {

  // Hook that allows us to listen for changes to Firestore without using an HOC in a class component
  useFirestoreConnect([
    { collection: 'surveys' }
  ]);

  // Hook that makes state available from our redux store
  const surveys = useSelector(state => state.firestore.ordered.surveys)

  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        
          <SurveysHeader>Survey List</SurveysHeader>
          <SurveysParagraph>Click on a survey below to enter your response!</SurveysParagraph>
          <hr />
          {surveys.map((survey) => 
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
  } else {
    return (
      <React.Fragment>
        <h3>Loading . . .</h3>
      </React.Fragment>
    )
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;