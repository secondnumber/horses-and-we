import React from 'react';
import { connect } from 'react-redux';
import FaqPage from './FaqPage';

let mapStateToProps = (state) => {
  return {
    faq: state.faq,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const FaqPageContainer = connect(mapStateToProps, mapDispatchToProps)(FaqPage);

export default FaqPageContainer;
