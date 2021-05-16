import React from 'react';
import { connect } from 'react-redux';
import Status from './Status/Status';
import Post from './Post/Post';

const BlogContent = (props) => {
  let status = props.status.map((el) => (
    <Status key={el.id} name={el.name} position={el.position} avatar={el.avatar} text={el.text} />
  ));
  let postsList = props.posts.map((el) => (
    <Post
      key={el.id}
      id={el.id}
      image={el.imgMedium}
      tag={el.tag}
      header={el.header}
      date={el.date}
      intro={el.intro}
      author={el.author}
      comments={el.comments}
      imgMedium={el.imgMedium}
    />
  ));
  return (
    <>
      {status}
      {postsList}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    status: state.blog.status,
    posts: state.blog.postsList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const BlogContentContainer = connect(mapStateToProps, mapDispatchToProps)(BlogContent);

export default BlogContentContainer;
