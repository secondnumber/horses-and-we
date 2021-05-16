import React from 'react';
import classes from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props) => {
  return (
    <li className={classes.item}>
      <span
        className={`${classes.icon} 
          ${
            props.color === 'cyan'
              ? classes.cyan
              : props.color === 'blue'
              ? classes.blue
              : props.color === 'lilac'
              ? classes.lilac
              : classes.gray
          }`}
      >
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <p>
        <span className={classes.title}>{props.name}</span>
        <p className={classes.contact}>{props.value}</p>
      </p>
    </li>
  );
};

export default Contact;
