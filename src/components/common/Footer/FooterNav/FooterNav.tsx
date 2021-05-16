import React from 'react';
import classes from './FooterNav.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  menuItem: string;
  menuLink: string;
};

const FooterNav: React.FC<Props> = ({ menuItem, menuLink }) => {
  return (
    <li>
      <NavLink to={menuLink} className={classes.item} activeClassName={classes.active}>
        {menuItem}
      </NavLink>
    </li>
  );
};

export default FooterNav;
