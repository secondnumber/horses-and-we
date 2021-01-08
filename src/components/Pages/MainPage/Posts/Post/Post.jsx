import React from 'react';
import classes from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.imageSmall} />
      <div className={classes.blockPost}>
        <span className={classes.tag}>
          <span
            className={
              props.color === 'blue'
                ? classes.blue
                : props.color === 'lilac'
                ? classes.lilac
                : classes.cyan
            }
          >
            {props.tag}
          </span>
        </span>
        <span className={classes.date}>{props.date}</span>
        <h1 className={classes.header}>{props.name}</h1>
        <p className={classes.description}>{props.description}</p>
        <span className={classes.author}>
          <span
            className={
              props.color === 'blue'
                ? classes.blue
                : props.color === 'lilac'
                ? classes.lilac
                : classes.cyan
            }
          >
            <FontAwesomeIcon icon={faUser} />
          </span>
          &nbsp;{props.author}
        </span>
        <span className={classes.comments}>
          <span
            className={
              props.color === 'blue'
                ? classes.blue
                : props.color === 'lilac'
                ? classes.lilac
                : classes.cyan
            }
          >
            <FontAwesomeIcon icon={faComment} />
          </span>
          &nbsp;{props.comments}
        </span>
      </div>
    </div>
  );
};

export default Post;
