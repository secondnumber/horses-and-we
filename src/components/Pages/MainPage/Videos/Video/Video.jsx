import React from 'react';
import classes from './Video.module.scss';
import Poster from '../../../../../assets/Video/poster.jpg';
import Button from '../../../../../assets/Video/video-player.svg';
import Image1 from '../../../../../assets/Video/stream-img-1.jpg';
import Image2 from '../../../../../assets/Video/stream-img-2.jpg';
import Image3 from '../../../../../assets/Video/stream-img-3.jpg';

const Video = (props) => {
  return (
    <div className={classes.block}>
      <video className={classes.video} controls poster={Poster}>
        <source src={props.file} type="video/mp4" />
      </video>
      <button className={classes.button} id="myBtn" onClick="myFunction()">
        <img className={classes.svg} src={Button} alt={'Button'} />
      </button>
      <div className={classes.content}>
        <h2 className={classes.header}>TENDERLOIN SHOULDER PICANHA RUMP</h2>
        <ul className={classes.list}>
          <li className={classes.item}>
            <img className={classes.image} src={Image1} alt={'User`s avatar'} />
          </li>
          <li className={classes.item}>
            <img className={classes.image} src={Image2} alt={'User`s avatar'} />
          </li>
          <li className={classes.item}>
            <img className={classes.image} src={Image3} alt={'User`s avatar'} />
          </li>
          <li className={classes.item}>
            <span>2569 watching now</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Video;
