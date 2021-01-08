import React from 'react';
import classes from './Posts.module.scss';
import Post from './Post/Post';

const Posts = (props) => {
  let postsList = props.posts.postsList.map((post) => (
    <Post
      name={post.name}
      tag={post.tag}
      date={post.date}
      description={post.description}
      author={post.author}
      comments={post.comments}
      imageSmall={post.src}
      color={post.color}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.subtitle}>Frash news</h2>
        <h2 className={classes.title}>Our latest Posts:</h2>
      </div>
      <p className={classes.description}>
        Pork chop pastrami meatball, picanha salami capicola drumstick tri-tip
        flank short loin strip steak prosciutto leberkas jowl fatback.
      </p>
      <ul className={classes.block}>{postsList}</ul>
    </div>
  );
};

export default Posts;
