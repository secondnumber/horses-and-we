import React from 'react';
import classes from './Videos.module.scss';
import Video from './Video/Video';
import Content from './Content/Content';
import Toggle from './Toggle/Toggle';
import Label from './Label/Label';

const Videos = (props) => {
  let togglesList = props.videos.togglesItems.map((toggle) => (
    <Toggle toggleClass={toggle.toggleClass} toggleItem={toggle.toggleItem} />
  ));

  let videosList = props.videos.videosItems.map((video) => (
    <Video file={video.file} />
  ));

  let contentList = props.videos.videosItems.map((content) => (
    <Content header={content.header} descriprion={content.descriprion} />
  ));

  let labelList = props.videos.videosItems.map((label) => (
    <Label caption={label.caption} count={label.count} />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <ul className={classes.list}>
          {togglesList}
        </ul>
        {videosList}
        {contentList}
        {labelList}
      </div>
    </div>
  );
};

export default Videos;
