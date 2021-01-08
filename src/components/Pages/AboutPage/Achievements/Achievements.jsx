import React from 'react';
import classes from './Achievements.module.scss';

const Achievements = (props) => (
  <li className={classes.item}>
    <img className={classes.image} src={props.image} />
    <span className={classes.counter}>{props.counter}</span>
    <span className={classes.label}>{props.label}</span>
  </li>
);

export default Achievements;
