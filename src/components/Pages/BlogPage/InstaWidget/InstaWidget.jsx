import React from 'react';
import classes from './InstaWidget.module.scss';

const InstaWidget = (props) => {
  let imagesList = props.images.map((el) => (
    <li className={classes.item}>
      <img className={classes.image} src={el.image} alt={'Insta image'}/>
    </li>
  ));
  return (
    <div>
      <h2 className={classes.header}>INSTAGRAM WIDGET</h2>
      <ul className={classes.list}>{imagesList}</ul>
    </div>
  );
};

export default InstaWidget;
