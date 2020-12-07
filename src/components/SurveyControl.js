import React, { Component } from 'react';
import NewSurveyForm from './NewSurveyForm';
import EditSurveyForm from './EditSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions';
import { withFirestore } from 'react-redux-firebase'


class SurveyControl extends Component {
  // Handle Main Button Click
  handleClick = () => {
    const{ dispatch } = this.props;
    if (this.props.selectedSurvey != null){
      const action = a.resetSurvey();
      dispatch(action);
      if (this.props.editing === true) {
        const action2 = a.toggleEditing();
        dispatch(action2);
      };
    } else {
      const action = a.toggleForm();
      dispatch(action);
    };
  }

  // Adding Survey
  handleAddingNewSurveyToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  // Reading Individual Survey
  handleChangingSelectedSurvey = (id) => {
    this.props.firestore.get({collection: 'surveys', doc: id}).then((survey) => {
      const firestoreSurvey = {
        name: survey.get("name"),
        description: survey.get("description"),
        question1: survey.get("question1"),
        question2: survey.get("question2"),
        question3: survey.get("question3"),
        question4: survey.get("question4"),
        id: survey.id
      }
      const { dispatch } = this.props;
      const selectedSurvey = firestoreSurvey;
      const action = a.selectSurvey(selectedSurvey);
      dispatch(action);
    });
  }

  // Updating Survey
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditing();
    dispatch(action);
  }

  handleEditingSurveyInList = (surveyToEdit) => {
    const { dispatch } = this.props;
    const action  = a.addSurvey(surveyToEdit);
    dispatch(action);
    const action2 = a.resetSurvey();
    dispatch(action2);
    const action3 = a.toggleEditing();
    dispatch(action3);
  }

  // Deleting Survey
  handleDeletingSurvey = (id) => {
    const { dispatch } = this.props;
    const action  = a.deleteSurvey(id);
    dispatch(action);
    const action2 = a.resetSurvey();
    dispatch(action2);
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

  if (this.props.editing) {
    currentlyVisibleState = 
      <EditSurveyForm 
        survey={this.props.selectedSurvey} 
        onEditSurvey={this.handleEditingSurveyInList} 
      />
    buttonText = "Return to Survey List";

  } else if (this.props.selectedSurvey != null){
      currentlyVisibleState = 
        <SurveyDetail 
          survey = {this.props.selectedSurvey} 
          onClickingDelete = {this.handleDeletingSurvey}
          onClickingEdit = {this.handleEditClick} 
        />
      buttonText= "Return to Survey List";

    } else if (this.props.formVisible) {
      currentlyVisibleState = 
        <NewSurveyForm 
          onNewSurveyCreation={this.handleAddingNewSurveyToList}
        />;
      buttonText = "Return to Survey List";

    } else {
      currentlyVisibleState = 
        <SurveyList 
          // surveyList={this.props.masterSurveyList} 
          onSurveySelection={this.handleChangingSelectedSurvey}
        />;
      buttonText = "Add Survey";
    };

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // masterSurveyList: state.masterSurveyList,
    formVisible: state.formVisible,
    selectedSurvey: state.selectedSurvey,
    editing: state.editing
  };
}

SurveyControl.propTypes = {
  masterSurveyList: PropTypes.object,
  formVisible: PropTypes.bool,
  selectedSurvey: PropTypes.object,
  editing: PropTypes.bool
}

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default withFirestore(SurveyControl);