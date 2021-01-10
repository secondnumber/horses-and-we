import React from 'react';
import { connect } from 'react-redux';
import Testimonials from './Testimonials';

let mapStateToProps = (state) => {
  return {
    testimonials: state.testimonials,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const TestimonialsContainer = connect(mapStateToProps)(Testimonials);

export default TestimonialsContainer;
