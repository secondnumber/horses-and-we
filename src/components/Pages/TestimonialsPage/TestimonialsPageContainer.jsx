import React from 'react';
import { connect } from 'react-redux';
import TestimonialsPage from './TestimonialsPage';

let mapStateToProps = (state) => {
  return {
    testimonials: state.testimonials,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const TestimonialsPageContainer = connect(mapStateToProps, mapDispatchToProps)(TestimonialsPage);

export default TestimonialsPageContainer;
