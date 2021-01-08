import React from 'react';
import { connect } from 'react-redux';
import ScrollButton from './ScrollButton';

let mapStateToProps = (state) => {
  return {
    scroll: state.scroll,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const ScrollButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ScrollButton);

export default ScrollButtonContainer;
