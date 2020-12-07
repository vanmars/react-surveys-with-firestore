import { combineReducers } from 'redux';
import surveyListReducer from './survey-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedSurveyReducer from './selected-survey-reducer';
import editingReducer from './editing-reducer';

const rootReducer = combineReducers({
  masterSurveyList: surveyListReducer,
  formVisible: formVisibleReducer,
  selectedSurvey: selectedSurveyReducer,
  editing: editingReducer
});

export default rootReducer;