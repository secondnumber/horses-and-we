import React from 'react';
import { connect } from 'react-redux';
import BlogPage from './BlogPage';

let mapStateToProps = (state) => {
  return {
    blog: state.blog,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const BlogPageContainer = connect(mapStateToProps, mapDispatchToProps)(BlogPage);

export default BlogPageContainer;
