import React from 'react';
import classes from './SocialInSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialInSlider = (props) => (
  <li className={classes.item}>
    <a className={classes.icon} href={props.link}>
      <FontAwesomeIcon icon={props.icon} size="2x" />
    </a>
  </li>
);

export default SocialInSlider;
