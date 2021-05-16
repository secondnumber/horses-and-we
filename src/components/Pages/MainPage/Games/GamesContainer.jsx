import React from 'react';
import { connect } from 'react-redux';
import Games from './Games';

let mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const GamesContainer = connect(mapStateToProps)(Games);

export default GamesContainer;
