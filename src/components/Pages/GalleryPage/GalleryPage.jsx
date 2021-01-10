import React from 'react';
import classes from './GalleryPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import Tag from '../../common/Tag/Tag';
import ImageItem from './ImageItem/ImageItem';
import ScrollButton from '../../common/ScrollButton/ScrollButton';
import PageNumbersContainer from './PageNumbers/PageNumbersGontainer';

const GalleryPage = (props) => {
  let tagsList = props.gallery.galleryTags.map((tag) => <Tag key={tag.id} galleryTag={tag.tag} />);

  let imagesList = props.gallery.galleryImages.map((image, index) => {
    let pageSize = props.gallery.pageSize;
    let currentPage = props.gallery.currentPage;
    if (index >= pageSize * currentPage - pageSize && index < pageSize * currentPage) {
      return <ImageItem key={image.id} id={image.id} galleryImage={image.imgSmall} />;
    }
  });

  let pageNumbersList = <PageNumbersContainer />;

  return (
    <div className={classes.extraWrapper}>
      <ScrollButton />
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <ul className={classes.tagsList}>{tagsList}</ul>
        <ul className={classes.imagesList}>{imagesList}</ul>
        <ul className={classes.numbersList}>{pageNumbersList}</ul>;
      </div>
      <FooterContainer />
    </div>
  );
};

export default GalleryPage;
