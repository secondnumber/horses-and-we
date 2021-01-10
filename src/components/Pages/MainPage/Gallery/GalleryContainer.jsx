import React from 'react';
import { connect } from 'react-redux';
import Gallery from './Gallery';

let mapStateToProps = (state) => {
  return {
    gallery: state.gallery,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const GalleryContainer = connect(mapStateToProps)(Gallery);

export default GalleryContainer;
