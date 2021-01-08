import React from 'react';
import classes from './Tag.module.scss';

const Tag = (props) => {
  return (
    <li>
      <a className={classes.tag} href="#">
        {props.galleryTag}
      </a>
    </li>
  );
};

export default Tag;
