import * as c from './ActionTypes';


export const addSurvey = (survey) => {
  const { name, description, question1, question2, question3, question4, id } = survey;
  return {
    type: c.ADD_Survey,
    name: name,
    description: description,
    question1: question1,
    question2: question2,
    question3: question3,
    question4: question4,
    id: id
  }
}

export const deleteSurvey = id => ({
  type: c.DELETE_Survey,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEditForm = () => ({
  type: c.TOGGLE_EDIT_FORM
});


export const selectSurvey= (survey) => {
  const { name, description, question1, question2, question3, question4, id } = survey;
  return {
    type: c.SELECT_SURVEY,
    name: name, 
    description: description,
    question1: question1,
    question2: question2,
    question3: question3,
    question4: question4,
    id: id
  };
}

export const resetSurvey = () => ({
  type: c.RESET_SURVEY
})