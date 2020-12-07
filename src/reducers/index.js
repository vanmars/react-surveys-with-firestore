import { combineReducers } from 'redux';
import surveyListReducer from './survey-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedSurveyReducer from './selected-survey-reducer';
import editingReducer from './editing-reducer';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
  masterSurveyList: surveyListReducer,
  formVisible: formVisibleReducer,
  selectedSurvey: selectedSurveyReducer,
  editing: editingReducer,
  firestore: firestoreReducer
});

export default rootReducer;