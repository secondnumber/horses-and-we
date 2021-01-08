import React from 'react';
import classes from './Image.module.scss';

const Image = (props) => {
  return (
    <div
      className={
        props.position === 'left'
          ? classes.left
          : props.position === 'right'
          ? classes.right
          : props.position === 'bottom'
          ? classes.bottom
          : props.position === 'center'
          ? classes.center
          : ''
      }
    >
      <img
        className={classes.image}
        src={props.galleryImages}
        alt={'Gallery image'}
      />
    </div>
  );
};

export default Image;
