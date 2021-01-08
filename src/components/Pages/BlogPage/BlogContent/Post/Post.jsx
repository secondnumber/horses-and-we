import React from 'react';
import classes from './Post.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.image} />
      <div className={classes.blockPost}>
        <span className={classes.tag}>{props.tag}</span>
        <span className={classes.date}>{props.date}</span>
        <div className={classes.header}>
          <NavLink className={classes.link} to={`/blog/${props.id}`}>
            {props.header}
          </NavLink>
        </div>
        <p className={classes.description}>{props.intro}</p>
        <p className={classes.author}>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faUserNinja} />
          </span>
          {props.author}
        </p>
        <p className={classes.comment}>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faComment} />
          </span>
          {props.comments}
        </p>
      </div>
    </div>
  );
};

export default Post;
