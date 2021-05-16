import React from 'react';
import classes from './Subscribe.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';
import FormSubscribe from './FormSubscribe/FormSubscribe';

const Subscribe = (props) => {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <div className={classes.header}>
          <h2 className={classes.title}>register for our Newsletter now</h2>
          <h2 className={classes.subtitle}>Newslatter</h2>
          <p className={classes.caption}>We are always ready to welcome you!</p>
        </div>
        <div className={classes.inputBlock}>
          <FormSubscribe onSubmit={submit} />
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'contact',
})(Subscribe);
