import React from 'react';
import classes from './ImageItem.module.scss';
import { NavLink } from 'react-router-dom';

const ImageItem = (props) => {
  return (
    <li className={classes.imageItem}>
      <NavLink to={`/gallery/${props.id}`}>
        <img src={props.galleryImage} />
      </NavLink>
    </li>
  );
};

export default ImageItem;
