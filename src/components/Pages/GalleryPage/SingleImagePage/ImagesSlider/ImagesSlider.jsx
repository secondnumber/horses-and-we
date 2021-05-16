import React from 'react';
import classes from './ImagesSlider.module.scss';

const ImagesSlider = (props) => {
  return (
    <li className={classes.imageItem}>
      <img className={classes.image} src={props.image} />
      <span className={classes.tag}>{props.tag}</span>
      <h2 className={classes.title}>{props.title}</h2>
    </li>
  );
};

export default ImagesSlider;
