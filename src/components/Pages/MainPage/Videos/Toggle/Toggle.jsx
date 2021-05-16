import React from 'react';
import classes from './Toggle.module.scss';
import { NavLink } from 'react-router-dom';

const Toggle = (props) => {
  return (
    <li className={classes.tag}>
      <NavLink className={classes.link} to="#">
        {props.toggleItem}
      </NavLink>
    </li>
  );
};

export default Toggle;
