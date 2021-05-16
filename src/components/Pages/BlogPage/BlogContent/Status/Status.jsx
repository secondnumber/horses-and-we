import React from 'react';
import classes from './Status.module.scss';

const Status = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.avatar} />
      <h1 className={classes.header}>{props.name}</h1>
      <span className={classes.status}>{props.position}</span>
      <p className={classes.description}>{props.text}</p>
    </div>
  );
};

export default Status;
