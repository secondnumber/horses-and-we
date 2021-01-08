import React from 'react';
import classes from './Game.module.scss';
import Image from './game-slide-img-1.jpg';
import Button from '../../../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Game = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <div className={classes.contentBlock}>
          <p className={classes.tags}>NEW GAMES ACTION</p>
          <p className={classes.date}>APR 25-27, 2018</p>
          <h2 className={classes.title}>Mix Combination</h2>
          <p className={classes.description}>
            Andouille frankfurter hamburger, swine leberkas tenderloin cupim.
            Ground round ball tip pastrami, turducken chicken porchetta fatback
            frankfurter. Pig kielbasa jowl strip.
            <br />
            <br />
            Steak sausage pork loin bacon tri-tip meatball shoulder cupim beef
            pork chop kevin boudin. Short loin pig meatball ham landjaeger
            pastrami. Drumstick ham hock chuck pork belly chicken prosciutto
            biltong salami ham pancetta.
          </p>
          <Button name={'Read more'} style={'buttonGradient'} />
          <span className={classes.stars}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
        <div className={classes.imageBlock}>
          <img className={classes.image} src={Image} />
        </div>
      </div>
    </div>
  );
};

export default Game;
