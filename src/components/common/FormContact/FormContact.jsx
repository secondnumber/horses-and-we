import React from 'react';
import classes from './FormContact.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../FormControls/Form';
import {
  maxLengthCreator,
  required,
  validateEmail,
} from '../../../utils/validators/validators';
import Button from '../Button/Button';

const maxLength10 = maxLengthCreator(10);
const maxLength40 = maxLengthCreator(40);
const maxLength300 = maxLengthCreator(300);

const FormContact = (props) => {
  return (
    <form action="" className={classes.form} onSubmit={props.handleSubmit}>
      <Field
        className={classes.input}
        component={Input}
        name="name"
        type="text"
        placeholder="full name"
        validate={[required, maxLength40]}
      />
      <Field
        className={classes.input}
        component={Input}
        name="email"
        type="text"
        placeholder="email address"
        validate={[required, validateEmail, maxLength40]}
      />
      <Field
        className={classes.input}
        component={Input}
        name="phone"
        type="text"
        placeholder="phone number"
        validate={[required, maxLength10]}
      />
      <Field
        className={classes.input}
        component={Input}
        name="subject"
        type="text"
        placeholder="subject"
        validate={[required, maxLength40]}
      />
      <Field
        className={classes.textarea}
        component={Textarea}
        name="message"
        type="textarea"
        cols="30"
        rows="10"
        placeholder="your message..."
        validate={[required, maxLength300]}
      />
      <div className={classes.btnBlock}>
        <Button name={'Send message'} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'contact',
})(FormContact);
