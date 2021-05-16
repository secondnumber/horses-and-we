import React, { useState } from 'react';
import classes from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { NestedMenuType } from '../../../../redux/reducers/navigationReducer';

type Props = {
  menuItem: string;
  menuLink: string;
  nestedMenu?: NestedMenuType[];
};

const HeaderMenu: React.FC<Props> = ({ menuItem, menuLink, nestedMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdownMenu = (flag: boolean) => {
    setIsOpen(flag);
  };

  return (
    <li
      className={classes.item}
      onMouseEnter={() => {
        handleOpenDropdownMenu(true);
      }}
      onMouseLeave={() => {
        handleOpenDropdownMenu(false);
      }}
    >
      <NavLink to={menuLink} className={classes.link} activeClassName={classes.active}>
        {menuItem}
      </NavLink>
      {isOpen && nestedMenu && <DropdownMenu nestedMenu={nestedMenu} />}
    </li>
  );
};

export default HeaderMenu;
