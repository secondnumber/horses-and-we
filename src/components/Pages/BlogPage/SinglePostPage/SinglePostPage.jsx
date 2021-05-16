import React from 'react';
import classes from './SinglePostPage.module.scss';
import HeaderContainer from '../../../common/Header';
import BreadcrumbsContainer from '../../../common/Breadcrumbs';
import FooterContainer from '../../../common/Footer';
import PostPreview from './PostPreview/PostPreview';
import PostFull from './PostFull/PostFull';

const SinglePostPage = (props) => {
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <div className={classes.block}>
          <PostPreview />
          <PostFull />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default SinglePostPage;
