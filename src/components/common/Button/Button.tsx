import React from 'react';
import classes from './Button.module.scss';

type Props = {
  name?: string;
  style?: string;
  buttonHandler?: () => void;
};

const Button: React.FC<Props> = ({ name, style, buttonHandler }) => (
  <>
    <button
      className={
        style === 'buttonContour'
          ? classes.buttonContour
          : style === 'buttonWhite'
          ? classes.buttonWhite
          : style === 'buttonGradientSquare'
          ? classes.buttonGradientSquare
          : style === 'buttonContourSquare'
          ? classes.buttonContourSquare
          : classes.buttonGradient
      }
      onClick={buttonHandler}
    >
      {name ? name : 'Button'}
    </button>
  </>
);

export default Button;
