import React from 'react';
import classes from './GamesPage.module.scss';
import HeaderContainer from '../../common/Header';
import BreadcrumbsContainer from '../../common/Breadcrumbs';
import FooterContainer from '../../common/Footer';
import Game from './Game/Game';

const GamesPage = (props) => {
  let gamesList = props.games.gamesList.map((el) => (
    <Game key={el.id} tag={el.tag} name={el.name} date={el.date} description={el.description} image={el.image} />
  ));

  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <ul className={classes.block}>{gamesList}</ul>
      <FooterContainer />
    </div>
  );
};
export default GamesPage;
