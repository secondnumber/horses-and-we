import React from 'react';
import classes from './ScrollButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const ScrollButton = (props) => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.wrapper}>
      <Button name={<FontAwesomeIcon icon={faArrowUp} />} style={'buttonGradientSquare'} buttonHandler={scrollUp} />
    </div>
  );
};

export default ScrollButton;
