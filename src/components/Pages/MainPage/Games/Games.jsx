import React from 'react';
import classes from './Games.module.scss';
import GameList from './GameList/GameList';
import Game from './Game/Game';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Games = (props) => {
  let gamesList = props.games.gamesList.map((el, index) => {
    let gamesAmount = props.games.gamesOnMain;
    if (index < gamesAmount) {
      return <GameList name={el.name} date={el.date} image={el.image} />;
    }
  });
  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.title}>Upcoming games</h2>
        <h2 className={classes.subtitle}>Coming soon</h2>
      </div>
      <div className={classes.block}>
        <button className={classes.toggle}>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </span>
        </button>
        {gamesList}
        <button className={classes.toggle}>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </span>
        </button>
      </div>
      <Game />
    </div>
  );
};

export default Games;
