import React from 'react';
import classes from './Categories.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Categories = (props) => {
  let categoriesList = props.categories.map((el) => (
    <li className={classes.item}>
      <span className={classes.icon}>
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <span className={classes.name}>{el.name}</span>
      <span className={classes.counter}>/{el.counter}</span>
    </li>
  ));

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>Categories</h2>
      <ul className={classes.list}>{categoriesList}</ul>
    </div>
  );
};

export default Categories;
