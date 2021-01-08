import React from 'react';
import { connect } from 'react-redux';
import PriceList from './PriceList';

let mapStateToProps = (state) => {
  return {
    priceList: state.priceList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const PriceListContainer = connect(mapStateToProps)(PriceList);

export default PriceListContainer;