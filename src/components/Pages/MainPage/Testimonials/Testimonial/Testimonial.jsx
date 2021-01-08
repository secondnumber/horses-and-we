import React from 'react';
import classes from './Testimonial.module.scss';

const Testimonial = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.imageSmall} />
      <h1 className={classes.header}>{props.name}</h1>
      <span className={classes.status}>{props.status}</span>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default Testimonial;
