import React from 'react';
import classes from './SingleImagePage.module.scss';
import HeaderContainer from '../../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../../common/Footer/FooterContainer';
import Tag from '../../../common/Tag/Tag';
import ImagesSlider from './ImagesSlider/ImagesSlider';
import ImageBig from '../../../../assets/GalleryPage/image-1.jpg';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../common/Button/Button';

const SingleImagePage = (props) => {
  let imagesList = props.gallery.galleryImages.map((image) => {
    if (image.id <= 4) {
      return <ImagesSlider key={image.id} image={image.imgSmall} tag={image.tag} title={image.title} />;
    }
  });

  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <Button name={<FontAwesomeIcon icon={faChevronLeft} />} style={'buttonContourSquare'} />
        <div className={classes.block}>
          <img className={classes.image} src={ImageBig} alt="" />
          <span className={classes.tag}>PS VITA</span>
          <h2 className={classes.title}>COW BILTONG PORK BELLY KIEL</h2>
        </div>
        <Button name={<FontAwesomeIcon icon={faChevronRight} />} style={'buttonContourSquare'} />
      </div>
      <ul className={classes.list}>{imagesList}</ul>
      <FooterContainer />
    </div>
  );
};

export default SingleImagePage;
