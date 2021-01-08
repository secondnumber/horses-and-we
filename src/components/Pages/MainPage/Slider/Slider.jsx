import React from 'react';
import classes from './Slider.module.scss';
import IntroContainer from './Intro/IntroContainer';

const Slider = (props) => {
  let introBlocks = props.slider.introList.map((element) => (
    <IntroContainer
      caption={element.caption}
      header={element.header}
      description={element.description}
    />
  ));
  return <div className={classes.wrapper}>{introBlocks}</div>;
};

export default Slider;
