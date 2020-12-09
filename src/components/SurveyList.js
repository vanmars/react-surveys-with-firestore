import React from 'react';
import PropTypes from "prop-types";
import Survey from  './Survey';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
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
        <Wrapper>
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
        </Wrapper>
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