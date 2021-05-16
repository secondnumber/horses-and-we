import React from 'react';
import classes from './Team.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Team = (props) => {
  let socialList = props.social.map((el) => (
    <li className={classes.item} key={el}>
      <NavLink to={el.link} className={classes.link}>
        <FontAwesomeIcon icon={el.icon} />
      </NavLink>
    </li>
  ));
  return (
    <li className={classes.block}>
      <div className={classes.imageBlock}>
        <NavLink to={props.id}>
          <img className={classes.image} src={props.image} alt={props.name} />
        </NavLink>
      </div>
      <NavLink to={props.id} className={classes.name}>
        <p>{props.name}</p>
      </NavLink>
      <span className={classes.rank}>{props.rank}</span>
      <ul className={classes.list}>{socialList}</ul>
    </li>
  );
};

export default Team;
