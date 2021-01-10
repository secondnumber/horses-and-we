import React from 'react';
import { connect } from 'react-redux';
import PriceListPage from './PriceListPage';

let mapStateToProps = (state) => {
  return {
    teamPage: state.teamPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const PriceListPageContainer = connect(mapStateToProps, mapDispatchToProps)(PriceListPage);

export default PriceListPageContainer;
