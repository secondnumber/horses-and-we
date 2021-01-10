import React from 'react';
import { connect } from 'react-redux';
import TeamPage from './TeamPage';

let mapStateToProps = (state) => {
  return {
    teamPage: state.teamPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const TeamPageContainer = connect(mapStateToProps, mapDispatchToProps)(TeamPage);

export default TeamPageContainer;
