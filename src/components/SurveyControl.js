import React, { Component } from 'react';
import NewSurveyForm from './NewSurveyForm';
import EditSurveyForm from './EditSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0 2em;
`;

const Button = styled.button`
  font-size: 1em;
  font-weight: bolder;
  margin: 0 auto;
  padding: 0.5em 1em;
  border: solid 2px #011936;
  border-radius: 5px;
  color: white;
  background-color: #011936;
  max-width: 50%;

  &:hover {
    color: #011936;
    background-color: white;
  }
`;

const SurveysHeader = styled.h1`
  font-size: 28px;
  margin: 2em auto 0;
  text-align: center;
`;

const SurveysParagraph = styled.p`
  font-size: 16px;
  margin: 1em auto 0;
  text-align: center;
`;

const Image = styled.img`
  width: 100vw;
  height: 90vh;
  margin-left: -2em;
`;

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
        timeOpen: survey.get("timeOpen"),
        creatorId: survey.get("creatorId"),
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
    const action = a.resetSurvey();
    dispatch(action);
    const action2 = a.toggleEditing();
    dispatch(action2);
  }

  // Deleting Survey
  handleDeletingSurvey = (id) => {
    this.props.firestore.delete({collection: 'surveys', doc: id})
    const { dispatch } = this.props;
    const action = a.resetSurvey();
    dispatch(action);
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
          onSurveySelection={this.handleChangingSelectedSurvey}
        />;
      buttonText = "Add Survey";
    };

    // RETURNS
    const auth = this.props.firebase.auth();
    if(!isLoaded(auth)) {
      return (
        <Wrapper>
          <SurveysHeader>Loading . . .</SurveysHeader>
          <br />
          <Image src='survey.jpg'></Image>
        </Wrapper>
      );
    };
    if(isLoaded(auth) && auth.currentUser == null) {
      return (
        <Wrapper>
          <SurveysHeader>Welcome to the Survey Generator!</SurveysHeader>
          <SurveysParagraph>Sign in to access the Survey List.</SurveysParagraph>
          <br />
          <Image src='survey.jpg'></Image>
        </Wrapper>
      );
    };
    if(isLoaded(auth) && auth.currentUser != null) {
      return (
        <React.Fragment>
          <Wrapper>
            {currentlyVisibleState}
            <br />
            <Button onClick={this.handleClick}>{buttonText}</Button>
            <div className="flex d-flex justify-content-center">
              
            </div>
         </Wrapper>
         <Image src='survey.jpg'></Image>
      </React.Fragment>
      );
    };
  };
}

const mapStateToProps = state => {
  return {
    formVisible: state.formVisible,
    selectedSurvey: state.selectedSurvey,
    editing: state.editing
  };
}

SurveyControl.propTypes = {
  formVisible: PropTypes.bool,
  selectedSurvey: PropTypes.object,
  editing: PropTypes.bool
}

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default withFirestore(SurveyControl);