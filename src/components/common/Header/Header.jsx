import React from 'react';
import classes from './Header.module.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  let menuItemElements = props.navigation.navMenuItems.map((el) => (
    <HeaderMenu
      key={el.id}
      menuItem={el.menuItem}
      menuLink={el.menuLink}
      nestedMenu={el.nestedMenu}
    />
  ));

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.image} src={props.navigation.logo} />
        <div>
          <p className={classes.title}>indiega</p>
          <p className={classes.label}>gaming solutions</p>
        </div>
      </div>
      <ul className={classes.list}>{menuItemElements}</ul>
      <div className={classes.utility}>
        <span className={classes.icon}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <Button name={'Join us now'} style={'buttonContour'} />
      </div>
    </div>
  );
};

export default Header;
