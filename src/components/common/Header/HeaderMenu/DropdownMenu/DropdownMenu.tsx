import React from 'react';
import classes from './DropdownMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { NestedMenuType } from '../../../../../redux/reducers/navigationReducer';

type Props = {
  nestedMenu: NestedMenuType[];
};

const DropdownMenu: React.FC<Props> = ({ nestedMenu }) => {
  const nestedMenuList = nestedMenu.map((el: NestedMenuType) => (
    <li className={classes.item} key={el.id}>
      <NavLink to={el.nestedMenuLink} className={classes.link} activeClassName={classes.active}>
        {el.nestedMenuItem}
      </NavLink>
    </li>
  ));
  return <ul className={classes.list}>{nestedMenuList}</ul>;
};
export default DropdownMenu;
