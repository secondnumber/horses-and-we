import React from 'react';
import classes from './Label.module.scss';

const Label = (props) => {
  return (
    <div className={classes.label}>
      <p className={classes.caption}>{props.caption}</p>
      <span className={classes.count}>{props.count}</span>
    </div>
  );
};

export default Label;
