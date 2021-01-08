import React from 'react';
import { connect } from 'react-redux';
import Videos from './Videos';

let mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const VideosContainer = connect(mapStateToProps)(Videos);

export default VideosContainer;