import React from 'react';
import classes from './Question.module.scss';

const Question = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.round}>
        <span className={classes.number}>{props.id}</span>
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>{props.question}</h2>
        <p className={classes.description}>{props.answer}</p>
      </div>
    </div>
  );
};

export default Question;
