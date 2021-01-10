import React from 'react';
import classes from './LatestPosts.module.scss';
import { NavLink } from 'react-router-dom';

const LatestPosts = (props) => {
  let postsList = props.posts.map((el, index) => {
    if (index <= 2) {
      return (
        <li className={classes.item}>
          <img className={classes.image} src={el.imgSmall} alt={'Post preview image'} />
          <div className={classes.content}>
            <NavLink className={classes.link} to={el.id}>
              <h3 className={classes.title}>{el.header}</h3>
              <span className={classes.date}>{el.date}</span>
            </NavLink>
          </div>
        </li>
      );
    }
  });
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>Latest Posts</h2>
      <ul>{postsList}</ul>
    </div>
  );
};

export default LatestPosts;
