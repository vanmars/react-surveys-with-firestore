import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>

        <input
          type='text'
          name='name'
          placeholder='Survey Name' 
        />
        <br />

        <textarea
          name='description'
          placeholder='Survey Description' 
        />
        <br />

        <input
          type='text'
          name='question1'
          placeholder='First Question' 
        />
        <br />

        <input
          type='text'
          name='question2'
          placeholder='Second Question' 
        />
        <br />

        <input
          type='text'
          name='question3'
          placeholder='Third Question' 
        />
        <br />

        <input
          type='text'
          name='question4'
          placeholder='Fourth Question' 
        />
        <br />

        <button type='submit'>{props.buttonText}</button>

      </form>

    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;