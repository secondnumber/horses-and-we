import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => (
  <>
    <button
      className={
        props.style === 'buttonContour'
          ? classes.buttonContour
          : props.style === 'buttonWhite'
          ? classes.buttonWhite
          : props.style === 'buttonGradientSquare'
          ? classes.buttonGradientSquare
          : props.style === 'buttonContourSquare'
          ? classes.buttonContourSquare
          : classes.buttonGradient
      }
      onClick={props.buttonHandler}
    >
      {props.name ? props.name : 'Button'}
    </button>
  </>
);

export default Button;
