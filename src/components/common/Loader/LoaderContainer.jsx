import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';

let mapStateToProps = (state) => {
  return {
    icon: state.common.loaderIcon,
  };
};

const LoaderContainer = connect(mapStateToProps)(Loader);

export default LoaderContainer;
