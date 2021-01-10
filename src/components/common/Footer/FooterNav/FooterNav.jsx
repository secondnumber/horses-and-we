import React from 'react';
import classes from './FooterNav.module.scss';
import { NavLink } from 'react-router-dom';

const FooterNav = (props) => {
  return (
    <li>
      <NavLink to={props.menuLink} className={classes.item} activeClassName={classes.active}>
        {props.menuItem}
      </NavLink>
    </li>
  );
};

export default FooterNav;
