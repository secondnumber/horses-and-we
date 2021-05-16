import React from 'react';
import classes from './Testimonial.module.scss';

const Testimonial = (props) => {
  return (
    <li className={classes.item}>
      <img className={classes.image} src={props.src} />
      <h1 className={classes.header}>{props.name}</h1>
      <span className={classes.status}>{props.status}</span>
      <p className={classes.description}>{props.description}</p>
    </li>
  );
};

export default Testimonial;
