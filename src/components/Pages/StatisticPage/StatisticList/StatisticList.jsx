import React from 'react';
import classes from './StatisticList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const StatisticList = (props) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
          <FontAwesomeIcon icon={faCheck} />
      </span>
      {props.name}
    </li>
  );
};

export default StatisticList;
