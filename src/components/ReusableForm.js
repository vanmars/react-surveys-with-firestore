import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const name = props.survey ? props.survey.name : 'Name';
  const description = props.survey ? props.survey.description : 'Description';
  const question1 = props.survey ? props.survey.question1 : 'Question 1';
  const question2 = props.survey ? props.survey.question2 : 'Question 2';
  const question3 = props.survey ? props.survey.question3 : 'Question 3';
  const question4 = props.survey ? props.survey.question4 : 'Question 4';

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor='name'>Survey Name</label>
        <input type='text' name='name' defaultValue={name} />
        <br />
        <br />

        <label htmlFor='description'>Survey Description</label>
        <textarea name='description'  defaultValue={description} />
        <br />
        <br />

        <label htmlFor='question1'>Question 1</label>
        <input type='text' name='question1'  defaultValue={question1} />
        <br />
        <br />

        <label htmlFor='question2'>Question 2</label>
        <input type='text' name='question2' defaultValue={question2} />
        <br />
        <br />

        <label htmlFor='question3'>Question 3</label>
        <input type='text' name='question3' defaultValue={question3} />
        <br />
        <br />

        <label htmlFor='question4'>Question 4</label>
        <input type='text' name='question4' defaultValue={question4} />
        <br />
        <br />

        <button type='submit'>{props.buttonText}</button>

      </form>

    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  survey: PropTypes.object
};

export default ReusableForm;