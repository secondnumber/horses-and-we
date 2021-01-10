import React from 'react';
import classes from './FormFaq.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../FormControls/Form';
import { maxLengthCreator, required, validateEmail } from '../../../utils/validators/validators';
import Button from '../Button/Button';

const maxLength40 = maxLengthCreator(40);
const maxLength300 = maxLengthCreator(300);

const FormFaq = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <Field
        className={classes.input}
        component={Input}
        name="name"
        type="text"
        placeholder="your name"
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
        name="subject"
        type="text"
        placeholder="subject"
        validate={[required, maxLength40]}
      />
      <Field
        component={Textarea}
        className={classes.textarea}
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="your question"
        validate={[required, maxLength300]}
      />
      <div className={classes.btnBlock}>
        <Button />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'faq',
})(FormFaq);
