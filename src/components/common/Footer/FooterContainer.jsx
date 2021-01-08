import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';

let mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    social: state.social,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;
