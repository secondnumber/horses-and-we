import React from 'react';
import classes from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';
import DropdownMenuContainer from './DropdownMenu/DropdownMenuContainer';

class HeaderMenu extends React.Component {
  state = {
    isOpen: false,
  };

  activateIsOpen() {
    this.setState({
      isOpen: true,
    });
  }

  deactivateIsOpen() {
    this.setState({
      isOpen: false,
    });
  }
  render() {
    return (
      <li
        className={classes.item}
        onMouseEnter={this.activateIsOpen.bind(this)}
        onMouseLeave={this.deactivateIsOpen.bind(this)}
      >
        <NavLink to={this.props.menuLink} className={classes.link} activeClassName={classes.active}>
          {this.props.menuItem}
        </NavLink>
        {this.state.isOpen && this.props.nestedMenu && <DropdownMenuContainer nestedMenu={this.props.nestedMenu} />}
      </li>
    );
  }
}

export default HeaderMenu;
