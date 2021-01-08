import React from 'react';
import classes from './Social.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = (props) => {
  return (
    <li className={classes.socialList}>
      <a className={classes.link} href={props.link}>
        <FontAwesomeIcon icon={props.icon} />
      </a>
    </li>
  );
};

export default Social;
