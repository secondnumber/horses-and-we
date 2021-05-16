import React from 'react';
import classes from './FormSubscribe.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../FormControls/Form';
import { validateEmail } from '../../../../utils/validators/validators';

const FormSubscribe = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <Field
        className={classes.input}
        component={Input}
        name="subscribe"
        type="text"
        placeholder="Enter your Email address here"
        validate={[validateEmail]}
      />
      <button className={classes.button} type="submit">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'contact',
})(FormSubscribe);
