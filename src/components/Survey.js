import React from 'react';
import PropTypes from 'prop-types';

function Survey(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSurveyClicked(props.id)}>
        <h3>{props.name}</h3>
        <h6>{props.description}</h6>
      </div>
    </React.Fragment>
  );
}

Survey.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  question1: PropTypes.string,
  question2: PropTypes.string,
  question3: PropTypes.string,
  question4: PropTypes.string,
  id: PropTypes.string,
  whenSurveyClicked: PropTypes.func
};

export default Survey