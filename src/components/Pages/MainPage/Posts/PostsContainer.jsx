import React from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';

let mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
