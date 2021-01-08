import React from 'react';
import classes from './GameList.module.scss';

const GameList = (props) => {
  return (
    <div>
      <img className={classes.image} src={props.image} />
      <h1 className={classes.header}>{props.name}</h1>
      <p className={classes.date}>{props.date}</p>
    </div>
  );
};

export default GameList;
