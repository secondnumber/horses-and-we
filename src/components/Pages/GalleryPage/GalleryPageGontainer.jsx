import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GalleryPage from './GalleryPage';

let mapStateToProps = (state) => {
  return {
    gallery: state.gallery,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const GalleryPageWithRouter = withRouter(GalleryPage);

const GalleryPageContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryPageWithRouter);

export default GalleryPageContainer;
