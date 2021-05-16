import React from 'react';
import { connect } from 'react-redux';
import SinglePostPage from './SinglePostPage';

let mapStateToProps = (state) => {
  return {
    blog: state.blog,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const SinglePostPageContainer = connect(mapStateToProps, mapDispatchToProps)(SinglePostPage);

export default SinglePostPageContainer;
