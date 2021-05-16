import React from 'react';
import classes from './Game.module.scss';

const Game = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.image} />
      <div className={classes.blockPost}>
        <span className={classes.tag}>{props.tag}</span>
        <span className={classes.date}>{props.date}</span>
        <h1 className={classes.header}>{props.name}</h1>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Game;
