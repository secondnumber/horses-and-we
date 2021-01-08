import React from 'react';
import classes from './PostPreview.module.scss';
import ImgSmall from '../../../../../assets/BlogPage/PostsImg/blog-img-1.jpg';
import { NavLink } from 'react-router-dom';

const PostPreview = (props) => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.block}
        style={{ backgroundImage: 'url(' + ImgSmall + ')' }}
      >
        <NavLink to={'/blog'}>
          <div className={classes.content}>
            <span className={classes.label}>previous post</span>
            <h2 className={classes.title}>
              Shirloin leberkas pig, rump ham hock tail shank burgdogen
            </h2>
          </div>
        </NavLink>
      </div>
      <div
        className={classes.block}
        style={{ backgroundImage: 'url(' + ImgSmall + ')' }}
      >
        <NavLink to={'/blog'}>
          <div className={classes.content + ' ' + classes.next}>
            <span className={classes.label}>next post</span>
            <h2 className={classes.title}>
              Meatlof strip steak ball tip venison prosciuto shankle
            </h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default PostPreview;
