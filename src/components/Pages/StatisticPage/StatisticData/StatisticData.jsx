import React from 'react';
import classes from './StatisticData.module.scss';

const StatisticData = (props) => {
  return (
    <tr className={classes.row}>
      <td className={classes.cell}>{props.name}</td>
      <td className={classes.cell}>{props.position}</td>
      <td className={classes.cell}>{props.age}</td>
      <td className={classes.cell}>{props.date}</td>
    </tr>
  );
};

export default StatisticData;
