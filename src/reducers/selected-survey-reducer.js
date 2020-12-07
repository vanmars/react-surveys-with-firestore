import * as c from '../actions/ActionTypes';

export default (state=null, action) => {
  const {type,  name, description, question1, question2, question3, question4, id} = action
  switch(type) {
    case c.SELECT_SURVEY:
      return {
        name: name, 
        description: description,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        id: id
      }
    case c.RESET_SURVEY:
      return null;
    default:
      return state;
  };
}