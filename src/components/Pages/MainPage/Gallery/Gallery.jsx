import React from 'react';
import classes from './Gallery.module.scss';
import Tag from '../../../common/Tag/Tag';
import Image from './Image/Image';
import Button from '../../../common/Button/Button';

const Gallery = (props) => {
  let tagsList = props.gallery.galleryTags.map((tag) => (
    <Tag galleryTag={tag.tag} />
  ));

  let imagesList = props.gallery.galleryImgPreview.map((image) => (
    <Image galleryImages={image.src} position={image.position} />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.title}>Screenshots gallery</h2>
        <h2 className={classes.subtitle}>all New Images</h2>
      </div>
      <ul className={classes.tagsList}>{tagsList}</ul>
      <div className={classes.imagesList}>{imagesList}</div>
      <div className={classes.btnBlock}>
        <Button name={'Discover more'} style={'buttonContour'} />
      </div>
    </div>
  );
};

export default Gallery;
