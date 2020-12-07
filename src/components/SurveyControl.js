import React, { Component } from 'react';

class SurveyControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      masterSurveyList: {},
      formVisible: false,
      selectedSurvey: null,
      editing: true
    };
  }

  // Handle Main Button Click
  handleClick = () => {
  }

  // Adding Survey

  // Reading All Surveys

  // Reading Individual Survey

  // Updating Survey

  // Deleting Survey



  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

    

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment> 
    );
  }
}

export default SurveyControl;