import React from 'react';
import classes from './Crumb.module.scss';

const Crumb = (props) => (
  <li className={classes.linksItem}>
    <a className={classes.link} href={props.link}>
      {props.name}
    </a>
    <span className={classes.separator}>{props.separator}</span>
  </li>
);

export default Crumb;
