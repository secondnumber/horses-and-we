import React from 'react';
import classes from './Twitter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Twitter = (props) => {
  let categoriesList = props.twits.map((el) => (
    <li className={classes.item} key={el}>
      <span className={classes.icon}>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </span>
      <p className={classes.text}>
        {el.text}
        <br />
        <br />
        <NavLink className={classes.link} to={'https://twitter.com/'}>
          /{el.link}
        </NavLink>
      </p>
    </li>
  ));
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>Twitter</h2>
      <ul>{categoriesList}</ul>
    </div>
  );
};

export default Twitter;
