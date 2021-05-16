import React from 'react';
import { connect } from 'react-redux';
import GamesPage from './GamesPage';

let mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const GamesPageContainer = connect(mapStateToProps, mapDispatchToProps)(GamesPage);

export default GamesPageContainer;
