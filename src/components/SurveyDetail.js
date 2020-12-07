import React from 'react';
import PropTypes from 'prop-types';

function SurveyDetail(props) {
  const { survey, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1>Survey Detail</h1>
      <h3>{survey.name}</h3>
      <h6>{survey.description}</h6>

      <form>
        <label htmlFor='response1'>{survey.question1}</label>
        <textarea name='response1' type='text' placeholder='Enter your response here.'
        />

        <label htmlFor='response2'>{survey.question2}</label>
        <textarea name='response2' type='text' placeholder='Enter your response here.'
        />

        <label htmlFor='response3'>{survey.question3}</label>
        <textarea name='response3' type='text' placeholder='Enter your response here.'
        />

        <label htmlFor='response4'>{survey.question4}</label>
        <textarea name='response4' type='text' placeholder='Enter your response here.'
        />
  
        <button type='submit'>Submit</button> 
      </form>

      <hr />
      <button onClick={ onClickingEdit }>Update Survey</button>
      <button onClick={()=> onClickingDelete(survey.id) }>Close Survey</button>

    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
}

export default SurveyDetail;