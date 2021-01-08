import React from 'react';
import { connect } from 'react-redux';
import SingleImagePage from './SingleImagePage';

let mapStateToProps = (state) => {
  return {
    gallery: state.gallery,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const SingleImagePageContainer = connect(mapStateToProps, mapDispatchToProps)(SingleImagePage);

export default SingleImagePageContainer;