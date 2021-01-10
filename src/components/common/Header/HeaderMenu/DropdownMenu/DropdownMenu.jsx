import React from 'react';
import classes from './DropdownMenu.module.scss';
import { NavLink } from 'react-router-dom';

const DropdownMenu = (props) => {
  let nestedMenuList = props.nestedMenu.map((el) => (
    <li className={classes.item} key={el}>
      <NavLink to={el.nestedMenuLink} className={classes.link} activeClassName={classes.active}>
        {el.nestedMenuItem}
      </NavLink>
    </li>
  ));
  return <ul className={classes.list}>{nestedMenuList}</ul>;
};
export default DropdownMenu;
