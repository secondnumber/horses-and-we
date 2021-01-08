import React from 'react';
import { connect } from 'react-redux';
import StatisticPage from './StatisticPage';

let mapStateToProps = (state) => {
  return {
    statistic: state.statistic,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const StatisticPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatisticPage);

export default StatisticPageContainer;
