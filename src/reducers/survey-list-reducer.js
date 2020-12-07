import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { type, name, description, question1, question2, question3, question4, id } = action;

  switch (type) {
    
  case c.ADD_SURVEY:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        description: description,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        id: id
      }
    });

  case c.DELETE_SURVEY:
    const newState = { ...state };
    delete newState[id];
    return newState;

  default:
    return state;
  }
};