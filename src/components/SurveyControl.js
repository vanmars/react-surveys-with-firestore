import React, { Component } from 'react';
import NewSurveyForm from './NewSurveyForm';
import EditSurveyForm from './EditSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import { connect } from 'react-redux';

class SurveyControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterSurveyList: [],
      formVisible: false,
      selectedSurvey: null,
      editing: false
    };
  }

  // Handle Main Button Click
  handleClick = () => {
    if (this.state.selectedSurvey != null) {
      this.setState({
        formVisible: false,
        selectedSurvey: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  // Adding Survey
  handleAddingNewSurveyToList = (newSurvey) => {
    const newMasterSurveyList = this.state.masterSurveyList.concat(newSurvey);
    this.setState({masterSurveyList: newMasterSurveyList,
                  formVisible: false });
  }

  // Reading Individual Survey
  handleChangingSelectedSurvey = (id) => {
    const selectedSurvey = this.state.masterSurveyList.filter(survey => survey.id === id)[0];
    this.setState({selectedSurvey: selectedSurvey});
  }

  // Updating Survey
  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingSurveyInList = (surveyToEdit) => {
    const editedMasterSurveyList = this.state.masterSurveyList
      .filter(survey => survey.id !== this.state.selectedSurvey.id)
      .concat(surveyToEdit);
    this.setState({
        masterSurveyList: editedMasterSurveyList,
        editing: false,
        selectedSurvey: null
      });
  }

  // Deleting Survey
  handleDeletingSurvey = (id) => {
    const newMasterSurveyList = this.state.masterSurveyList.filter(survey=> survey.id !== id);
    this.setState({
      masterSurveyList: newMasterSurveyList,
      selectedSurvey: null
    });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

  if (this.state.editing) {
    currentlyVisibleState = 
      <EditSurveyForm 
        survey={this.state.selectedSurvey} 
        onEditSurvey={this.handleEditingSurveyInList} 
      />
    buttonText = "Return to Survey List";

  } else if (this.state.selectedSurvey != null){
      currentlyVisibleState = 
        <SurveyDetail 
          survey = {this.state.selectedSurvey} 
          onClickingDelete = {this.handleDeletingSurvey}
          onClickingEdit = {this.handleEditClick} 
        />
      buttonText= "Return to Survey List";

    } else if (this.state.formVisible) {
      currentlyVisibleState = 
        <NewSurveyForm 
          onNewSurveyCreation={this.handleAddingNewSurveyToList}
        />;
      buttonText = "Return to Survey List";

    } else {
      currentlyVisibleState = 
        <SurveyList 
          surveyList={this.state.masterSurveyList} 
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
    masterSurveyList: state.masterSurveyList,
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

export default SurveyControl;