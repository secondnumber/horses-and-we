import React from 'react';
import classes from './About.module.scss';

const About = (props) => (
  <div className={classes.wrapper}>
    <div className={classes.aboutBlock}>
      <div className={classes.headers}>
        <span className={classes.number}>{props.number}</span>
        <h2 className={classes.title}>{props.title}</h2>
        <h2 className={classes.subtitle}>{props.subtitle}</h2>
        <div className={classes.textBlock}>
          <p className={classes.text}>{props.text}</p>
          <p className={classes.label}>{props.labelOne}</p>
          <p className={classes.label}>{props.labelTwo}</p>
        </div>
      </div>
      <div>
        <video className={classes.video} width="500" controls>
          <source src={props.video} type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);

export default About;
