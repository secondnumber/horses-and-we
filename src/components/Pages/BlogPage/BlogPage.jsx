import React from 'react';
import classes from './BlogPage.module.scss';
import HeaderContainer from '../../common/Header';
import BreadcrumbsContainer from '../../common/Breadcrumbs';
import FooterContainer from '../../common/Footer';
import InstaWidget from './InstaWidget/InstaWidget';
import BlogNewsletter from './BlogNewsletter/BlogNewsletter';
import Categories from './Categories/Categories';
import Twitter from './Twitter/Twitter';
import LatestPosts from './LatestPosts/LatestPosts';
import Calendar from './Calendar/Calendar';
import BlogSearch from './BlogSearch/BlogSearch';
import BlogContentContainer from './BlogContent/BlogContentContainer';

const BlogPage = (props) => {
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <div className={classes.block}>
          <div className={classes.sidebar}>
            <InstaWidget images={props.blog.instaImageList} />
            <BlogNewsletter />
            <Categories categories={props.blog.categoriesList} />
            <Twitter twits={props.blog.twitslist} />
            <LatestPosts posts={props.blog.postsList} />
            <Calendar />
            <BlogSearch />
          </div>
          <div className={classes.content}>
            <BlogContentContainer />
          </div>
        </div>
        <FooterContainer />
      </div>
    </div>
  );
};

export default BlogPage;
