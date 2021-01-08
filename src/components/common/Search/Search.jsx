import React from 'react';
import classes from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';
import Button from '../Button/Button';

const Search = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <Field
        className={classes.input}
        component="input"
        name="subscribe"
        type="text"
        placeholder="Search here..."
      />
      <div className={classes.button}>
        <Button
          name={<FontAwesomeIcon icon={faSearch} />}
          style={'buttonGradientSquare'}
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'search',
})(Search);
