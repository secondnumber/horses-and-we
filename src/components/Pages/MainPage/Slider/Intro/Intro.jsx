import React from 'react';
import classes from './Intro.module.scss';
import SocialInSlider from './SocialInSlider/SocialItem';
import Button from '../../../../common/Button/Button';

const Intro = (props) => {
  let socialList = props.slider.socialList.map((el) => <SocialInSlider key={el.id} icon={el.icon} link={el.link} />);
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperToggle}>
        <span className={classes.toggleNumber}>01</span>
        <span className={classes.toggleNumber}>02</span>
        <span className={classes.toggleNumber}>03</span>
      </div>
      <div className={classes.wrapperText}>
        <p className={classes.caption}>{props.caption}</p>
        <h1 className={classes.header}>{props.header}</h1>
        <p className={classes.description}>{props.description}</p>
        <Button name={'More about us'} style={'buttonWhite'} />
      </div>
      <ul className={classes.socialList}>{socialList}</ul>
    </div>
  );
};

export default Intro;
